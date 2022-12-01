import React from "react";
import './styles/survey.css'
import { useNavigate, Link } from 'react-router-dom';
//var fs = require("browserify-fs");
export function Survey(){

    const submission = () => {
        let music = document.getElementsByName("question1");
        let game = document.getElementsByName("question2");
        let activity = document.getElementsByName("question3");
        let snack = document.getElementsByName("question4");
        let movie = document.getElementsByName("question5");
        var musicChoice, gameChoice, activityChoice, snackChoice, movieChoice;
        
        for( let index = 0; index < 4; index++ )
        {
            if( music[ index ].checked )
            {
                musicChoice = music[ index ].value;
            }

            if( game[ index ].checked )
            {
                gameChoice = game[ index ].value;
            }

            if( activity[ index ].checked )
            {
               activityChoice = activity[ index ].value;
            }

            if( snack[ index ].checked )
            {
                snackChoice = snack[ index ].value;
            }

            if( movie[ index ].checked )
            {
                movieChoice = movie[ index ].value;
            }
        }

        var choiceObject = {
            "Music": musicChoice,
            "Game": gameChoice,
            "Activity": activityChoice,
            "Food": snackChoice,
            "Movie": movieChoice
        };

        //var jsonString = JSON.stringify( choiceObject );
        //fs.writeFile("inputstring.json", jsonString );


        navigate('/Home');
    }

    const navigate = useNavigate();

    return(
        <div className = "surveyPage">
        <div className="survey-main">
            <h1 className="survey-title">Survey</h1>
            <h2 className="survey-question">What kind of music are you currently in the mood to listen to?</h2>
            <ul className="choices" >
                <li>
                    <label>
                        <input type="radio" name="question1" value="lofi"></input>
                        <span className="submission-text">Lofi</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input type="radio" name="question1" value="rock"></input>
                        <span className="submission-text">Rock</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input type="radio" name="question1" value="folk"></input>
                        <span className="submission-text">Folk</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input type="radio" name="question1" value="rap"></input>
                        <span className="submission-text">Rap</span>
                    </label>
                </li>
            </ul>
            <h2 className="survey-question">Which game do you feel most inclined to play?</h2>
            <ul className="choices" >
            <li>
                <label>
                    <input type="radio" name="question2" value="risk"></input>
                        <span className="submission-text">Risk</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="question2" value="chess"></input>
                        <span className="submission-text">Chess</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="question2" value="checkers"></input>
                        <span className="submission-text">Checkers</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="question2" value="tic-tac-toe"></input>
                        <span className="submission-text">Tic-Tac-Toe</span>
                </label>
            </li>
            </ul>
            <h2 className="survey-question">Which activity sounds most appealing to you?</h2>
            <ul className="choices" >
            <li>
                <label>
                    <input type="radio" name="question3" value="sleeping"></input>
                        <span className="submission-text">Sleeping</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="question3" value="running"></input>
                        <span className="submission-text">Running</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="question3" value="watching"></input>
                        <span className="submission-text">Watching TV</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="question3" value="swimming"></input>
                        <span className="submission-text">Swimming</span>
                </label>
            </li>
            </ul>
            <h2 className="survey-question">Which snack sounds good to you?</h2>
            <ul className="choices" >
            <li>
                <label>
                    <input type="radio" name="question4" value="oreos"></input>
                        <span className="submission-text">Oreos</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="question4" value="goldfish"></input>
                        <span className="submission-text">Goldfish</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="question4" value="apple"></input>
                        <span className="submission-text">Apple</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="question4" value="cheerios"></input>
                        <span className="submission-text">Cheerios</span>
                </label>
            </li>
            </ul>
            <h2 className="survey-question">Which genre of movie would you like to watch?</h2>
            <ul className="choices" >
            <li>
                <label>
                    <input type="radio" name="question5" value="drama"></input>
                        <span className="submission-text">Drama</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="question5" value="comedy"></input>
                        <span className="submission-text">Comedy</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="question5" value="horror"></input>
                        <span className="submission-text">Horror</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="question5" value="action"></input>
                        <span className="submission-text">Action</span>
                </label>
            </li>
            </ul>
            
            <button className = "login-btn" onClick={ submission }>Submit</button>
        </div>
        </div>
    )
}
