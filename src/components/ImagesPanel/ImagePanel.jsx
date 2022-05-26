import React, { Component } from "react";
import "./ImagePanel.css";

export default class ImagePanel extends Component {
    render() {
        return (
            <div className="image-container">
                <img
                    className="image"
                    alt="#"
                    src={this.props.imageSrc}
                    onLoad={this.props.onImageLoad}
                    // src={require(`${this.props.imageSrc}`)}
                    // src="https://ca-times.brightspotcdn.com/dims4/default/3c98aaf/2147483647/strip/true/crop/3200x2140+0+0/resize/1486x994!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd3%2F30%2F2426583d4190be0ec2b1be2ce3d6%2Fla-et-mn-animation-is-film-01a.jpg"
                ></img>
                <h3 className="image-title">{this.props.imageTitle}</h3>
            </div>
        );
    }
}
