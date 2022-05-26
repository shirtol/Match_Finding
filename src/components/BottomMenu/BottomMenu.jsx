import React, { Component } from "react";
import Button from "../Button/Button";
import "./BottomMenu.css";

export default class BottomMenu extends Component {
    render() {
        return (
            <div className="bottom-menu-container">
                <Button
                    btnImgSrc={require("../../assets/images/like.png")}
                ></Button>
                <Button
                    btnImgSrc={require("../../assets/images/unlike.png")}
                ></Button>
            </div>
        );
    }
}
