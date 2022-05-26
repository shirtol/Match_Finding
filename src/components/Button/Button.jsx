import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
    render() {
        return (
            <div className="btn-container">
                <img
                    className="image"
                    alt="#"
                    src={this.props.btnImgSrc}
                    onClick={this.props.onClick}
                ></img>
            </div>
        );
    }
}
