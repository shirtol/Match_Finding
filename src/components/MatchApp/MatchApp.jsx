import React, { Component } from "react";
import AppTitle from "../AppTitle/AppTitle";
import BottomMenu from "../BottomMenu/BottomMenu";
import ImagePanel from "../ImagesPanel/ImagePanel";
import TopMenu from "../TopMenu/TopMenu";
import "./MatchApp.css";
import { imageData } from "../../ImagesData/imagesData";
import PopUp from "../PopUp/PopUp";
import MobileMessage from "../MobileMessage/MobileMessage";

export default class MatchApp extends Component {
    state = {
        happyCounter: 0,
        sadCounter: 0,
        currImage: imageData[0],
        isPopUpOpen: false,
        didImageLoad: false,
        endQuizMessage: "",
    };

    onLikeClick = () => {
        this.setState(
            (prevState) => ({
                happyCounter: prevState.happyCounter + 1,
                currImage:
                    imageData[
                        prevState.happyCounter + prevState.sadCounter + 1
                    ],
                didImageLoad: false,
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
                didImageLoad: false,
            }),
            this.handleShowPopUp
        );
    };

    changeEndQuizMessage = () => {
        if (this.state.happyCounter > this.state.sadCounter) {
            return "よくできました";
        } else {
            return `お前はもう死んでいる`;
        }
    };

    handleShowPopUp = () => {
        if (this.state.currImage === undefined) {
            const endQuizMessage = this.changeEndQuizMessage();
            this.setState({
                isPopUpOpen: true,
                endQuizMessage: endQuizMessage,
            });
        }
    };

    onImageLoad = () => {
        this.setState({ didImageLoad: true });
    };

    onStartQuiz = () => {
        this.setState({
            happyCounter: 0,
            sadCounter: 0,
            currImage: imageData[0],
            isPopUpOpen: false,
            didImageLoad: false,
        });
    };

    render() {
        return (
            <>
                <div className="bg-container"></div>
                <MobileMessage></MobileMessage>
                <PopUp
                    isShown={this.state.isPopUpOpen}
                    onStartQuiz={this.onStartQuiz}
                    endQuizMessage={this.state.endQuizMessage}
                ></PopUp>
                <div className="match-app-container">
                    <AppTitle></AppTitle>
                    <TopMenu
                        happyCounterDisplay={this.state.happyCounter}
                        sadCounterDisplay={this.state.sadCounter}
                    ></TopMenu>
                    <ImagePanel
                        isImageShown={!this.state.isPopUpOpen}
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
            </>
        );
    }
}
