import React, { Component } from "react";
import "./ImagePanel.css";

export default class ImagePanel extends Component {
    render() {
        return (
            <div className="image-container">
                {this.props.isImageShown && (
                    <img
                        className="image"
                        alt="#"
                        src={this.props.imageSrc}
                        onLoad={this.props.onImageLoad}
                    ></img>
                )}
                <h3 className="image-title">{this.props.imageTitle}</h3>
            </div>
        );
    }
}
