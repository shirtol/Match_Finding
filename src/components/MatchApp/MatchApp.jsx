import React, { Component } from "react";
import AppTitle from "../AppTitle/AppTitle";
import BottomMenu from "../BottomMenu/BottomMenu";
import ImagePanel from "../ImagesPanel/ImagePanel";
import TopMenu from "../TopMenu/TopMenu";
import "./MatchApp.css";
import { imageData } from "../../ImagesData/imagesData";
import PopUp from "../PopUp/PopUp";

export default class MatchApp extends Component {
    state = {
        happyCounter: 0,
        sadCounter: 0,
        currImage: imageData[0],
        isPopUpOpen: false,
        didImageLoad: false,
    };

    onLikeClick = () => {
        this.setState(
            (prevState) => ({
                happyCounter: prevState.happyCounter + 1,
                currImage:
                    imageData[
                        prevState.happyCounter + prevState.sadCounter + 1
                    ],
            }),
            this.handleShowPopUp
        );
    };

    onUnlikeClick = () => {
        this.setState(
            (prevState) => ({
                sadCounter: prevState.sadCounter + 1,
                currImage:
                    imageData[
                        prevState.happyCounter + prevState.sadCounter + 1
                    ],
            }),
            this.handleShowPopUp
        );
    };

    handleShowPopUp = () => {
        if (this.state.currImage === undefined) {
            this.setState({ isPopUpOpen: true });
        }
    };

    onImageLoad = () => {
        this.setState({ didImageLoad: true });
    };

    render() {
        return this.state.isPopUpOpen ? (
            <PopUp></PopUp>
        ) : (
            <div>
                <AppTitle></AppTitle>
                <TopMenu
                    happyCounterDisplay={this.state.happyCounter}
                    sadCounterDisplay={this.state.sadCounter}
                ></TopMenu>
                <ImagePanel
                    imageSrc={this.state.currImage?.imageSrc}
                    imageTitle={this.state.currImage?.title}
                    onImageLoad={this.onImageLoad}
                ></ImagePanel>
                <BottomMenu
                    onLikeClick={this.onLikeClick}
                    onUnlikeClick={this.onUnlikeClick}
                    disable={!this.state.didImageLoad}
                ></BottomMenu>
            </div>
        );
    }
}
