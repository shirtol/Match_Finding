import React, { Component } from "react";
import AppTitle from "../AppTitle/AppTitle";
import BottomMenu from "../BottomMenu/BottomMenu";
import ImagePanel from "../ImagesPanel/ImagePanel";
import TopMenu from "../TopMenu/TopMenu";
import "./MatchApp.css";

export default class MatchApp extends Component {
    render() {
        return (
            <div>
                <AppTitle></AppTitle>
                <TopMenu></TopMenu>
                <ImagePanel></ImagePanel>
                <BottomMenu></BottomMenu>
            </div>
        );
    }
}
