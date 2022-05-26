import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
    render() {
        return (
            <div className="counter-container">
                <img
                    className="counter-img"
                    alt="#"
                    src={this.props.imageSrc}
                ></img>
                <h2>0</h2>
            </div>
        );
    }
}
