import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
    render() {
        return (
            <div
                className="btn-container"
                disabled={this.props.disable}
                onClick={this.props.onClick}
            >
                <i className={this.props.iconClassName}></i>
            </div>
        );
    }
}
