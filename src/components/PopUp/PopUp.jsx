import React, { Component } from "react";
import Button from "../Button/Button";
import "./PopUp.css";

export default class PopUp extends Component {
    render() {
        return (
            this.props.isShown && (
                <div className="pop-up-container ">
                    <div className="end-game-popup-container">
                        <h1 className="end-title">WOW!</h1>
                        <h4 className="end-msg">Do You Want To Play Again?</h4>
                        <Button
                            onClick={this.props.onStartQuiz}
                            iconClassName="fa-solid fa-play fa-4x"
                        ></Button>
                    </div>
                </div>
            )
        );
    }
}
