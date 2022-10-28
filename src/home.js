import React from 'react';
import { json } from 'react-router-dom';
import './styles/home.css';
import gifCard from './components/gifCard';

const APIKEY = "Cu6D3J7fGIApf34bTdrZKkVTMZTikPwb"; 

export function Home() {
    const [ card, setCards ] = React.useState([]);
    const getApiResults = async () => {
        await fetch("https://api.giphy.com/v1/gifs/trending?api_key=" + APIKEY + "&limit=25&rating=g" )
        .then( response => {
            return response.json();
        })
        .then( data => {
            let contentLength = data.data.length;
            for( let index = 0; index < contentLength; index++ )
            {
                let item = data.data[ index ].embed_url;
                setCards( startArray => [ item, ...startArray ] );
            }
        })
        .catch( error => {
            console.error( error );
        })
    }

    React.useEffect(() => {
        getApiResults();
    }, [] )

    return(
        <div className = "page">
            <div className = "main-home-card">
            <h1 className = "titleAlignHome">
               Welcome Home!<br></br> Here are some freshly baked jokes 
            </h1>
            <ul>
                { card.map(( item, index ) => {
                return(
                    <iframe className='gif' src={ item }></iframe>
                )})}
            </ul>
            </div>
        </div>
    );
}
/*
https://giphy.com/embed/FuUaHVsmk5D4IlgsUr
})}
*/