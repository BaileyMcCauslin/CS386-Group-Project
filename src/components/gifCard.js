import React from "react";

export default function GifCard( prop ) {
    return(
        <div>
            <iframe src={ prop }></iframe>
        </div>
    )
}