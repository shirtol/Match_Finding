import React, { Component } from "react";

export default class PopUp extends Component {
    render() {
        return this.props.isShown && <div>PopUp</div>;
    }
}
