import React, { Component } from "react";
import Counter from "../Counter/Counter";
import "./TopMenu.css";

export default class TopMenu extends Component {
    render() {
        return (
            <div className="top-menu-container">
                <Counter
                    imageSrc={require("../../assets/images/happy.png")}
                ></Counter>
                <Counter
                    imageSrc={require("../../assets/images/sad.jpg")}
                ></Counter>
            </div>
        );
    }
}
