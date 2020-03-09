import React from 'react';
import FieldGame from "../Components/FieldGame";
import {connect} from "react-redux";
import {gameOver} from "../redux/mainReducer";
// import {ICardsInterface, } from "../redux/interfaces";

// interface IPropsFieldGameContainer {
//     cardsGamer1: ICardsInterface[],
//     cardsGamer2: ICardsInterface[],
//     cardGamer1: ICardsInterface[],
//     cardGamer2: ICardsInterface[],
//     compare: string,
//     isMove: boolean,
// }

function FieldGameContainer({cardsGamer1, cardsGamer2, cardGamer1,
                                cardGamer2, compare, gameOver, strokeNumber}: any) {

    return <FieldGame cardsGamer1={cardsGamer1}
                      cardsGamer2={cardsGamer2}
                      cardGamer1={cardGamer1}
                      cardGamer2={cardGamer2}
                      compare={compare}
                      gameOver={gameOver}
                      strokeNumber={strokeNumber}/>
}

const mapStateToProps = (state: any): any => ({
    cardsGamer1: state.main.cardsGamer1,
    cardsGamer2: state.main.cardsGamer2,
    cardGamer1: state.main.cardGamer1,
    cardGamer2: state.main.cardGamer2,
    compare: state.main.compare,
    strokeNumber: state.main.strokeNumber,
});


export default connect(mapStateToProps, {gameOver})(FieldGameContainer);