import React, { Component } from "react";
import Button from "../Button/Button";
import "./BottomMenu.css";

export default class BottomMenu extends Component {
    render() {
        return (
            <div className="bottom-menu-container">
                <Button
                    disable={this.props.disable}
                    iconClassName="fa-solid fa-thumbs-up fa-4x"
                    onClick={this.props.onLikeClick}
                ></Button>
                <Button
                    disable={this.props.disable}
                    iconClassName="fa-solid fa-thumbs-down fa-4x"
                    onClick={this.props.onUnlikeClick}
                ></Button>
            </div>
        );
    }
}
