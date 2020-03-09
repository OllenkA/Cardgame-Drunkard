import React from "react";
import {connect} from "react-redux";
import {compareGameCards, gameMove, pickUpCards, startGame, shuffleCards} from "../redux/mainReducer";
import Buttons from "../Components/Buttons";
import {IButton} from "../redux/interfaces";


function ButtonsContainer({startGame, gameMove, compareGameCards, pickUpCards, shuffleCards,
                              cards, cardsGamer1, cardsGamer2, cardGamer1, cardGamer2, compare}: any) {

    const startTheGame = async () => {
        await gameMove();
        compareGameCards();
    };

    const pickUp = () => {
        if (compare === '0') {
            gameMove();
            compareGameCards();
        } else {
            pickUpCards()
        }
    };

    const arrayButtons: IButton[] = [
        {
            id: 1,
            buttonClicked: shuffleCards,
            title: ' Shuffle cards - Тасовать карты',
            isDisabled: false},
        {
            id: 2,
            buttonClicked: startGame,
            title: 'Deal cards - Раздать карты',
            isDisabled: (cards.length === 0)
        },
        {
            id: 3,
            buttonClicked: startTheGame,
            title: 'MOVE - Ходить',
            isDisabled: (cardsGamer1.length === 0 || cardsGamer2.length === 0)
                || (cardGamer1.length !== 0 || cardGamer2.length !== 0)
        },
        {
            id: 4,
            buttonClicked: pickUp,
            title: 'End turn - Закончить ход',
            isDisabled: false},
    ];

    return (
        <Buttons arrayButtons={arrayButtons}/>
    );
}

const mapStateToProps = (state: any): any => ({
    compare: state.main.compare,
    cards: state.main.cards,
    cardsGamer1: state.main.cardsGamer1,
    cardsGamer2: state.main.cardsGamer2,
    cardGamer1: state.main.cardGamer1,
    cardGamer2: state.main.cardGamer2,
});


export default connect(mapStateToProps,
    {gameMove, compareGameCards, pickUpCards, startGame, shuffleCards})(ButtonsContainer);