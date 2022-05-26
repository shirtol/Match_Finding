import React, { Component } from "react";
import Button from "../Button/Button";
import "./BottomMenu.css";

export default class BottomMenu extends Component {
    render() {
        return (
            <div className="bottom-menu-container">
                <Button
                    disable={this.props.disable}
                    btnImgSrc={require("../../assets/images/like.png")}
                    onClick={this.props.onLikeClick}
                ></Button>
                <Button
                    disable={this.props.disable}
                    btnImgSrc={require("../../assets/images/unlike.png")}
                    onClick={this.props.onUnlikeClick}
                ></Button>
            </div>
        );
    }
}
