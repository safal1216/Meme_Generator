
import React from "react"
import ReactDOM from "react-dom/client"

export default function Head() {
    return (
    <header className="header">
            <img 
                src="./troll-face.png" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Project</h4>
        </header>
    )
}