import React, { Component } from "react";
import "./AppTitle.css";

export default class AppTitle extends Component {
    render() {
        return (
            <div className="title-container">
                <h2 className="app-title">Fun Matching Game</h2>
                <h4 className="app-description">
                    Click like if you saw this Anime, and dislike if you didn't
                </h4>
            </div>
        );
    }
}
