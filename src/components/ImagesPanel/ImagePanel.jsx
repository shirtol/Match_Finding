import React, { Component } from "react";
import "./ImagePanel.css";

export default class ImagePanel extends Component {
    render() {
        return (
            <div className="image-container">
                <img
                    className="image"
                    alt="#"
                    src="https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg"
                ></img>
                <h3 className="image-title">Image Title</h3>
            </div>
        );
    }
}
