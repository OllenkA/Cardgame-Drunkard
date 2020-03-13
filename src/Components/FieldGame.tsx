import React from 'react';
import '../App.css';
import PlayerCards from "./PlayerCards";
import PopUp from "./PopUp";
import {ICardsInterface} from "../redux/interfaces";
import FieldForCards from "./FieldForCards";


interface IPropsFieldGame {
    cardsGamer1: ICardsInterface[],
    cardsGamer2: ICardsInterface[],
    cardGamer1: ICardsInterface[],
    cardGamer2: ICardsInterface[],
    compare: string,
    gameOver: () => void,
    strokeNumber: number,
    gameMove: () => void,
    pickUpCards: () => void,
    compareGameCards: () => void,
}

function FieldGame({cardsGamer1, cardsGamer2, cardGamer1, cardGamer2, gameMove, pickUpCards, compareGameCards,
                       compare, gameOver, strokeNumber}: IPropsFieldGame) {

    return (
        <article className="fieldGameContainer">

            <PlayerCards numbersOfCards={cardsGamer1.length} gamer={'Gamer 1'}/>
            <FieldForCards cardGamer1={cardGamer1}
                       cardGamer2={cardGamer2}
                       compare={compare}
            gameMove={gameMove} pickUpCards={pickUpCards}
                           compareGameCards={compareGameCards}/>

            {
                (cardsGamer2.length === 36 || cardsGamer1.length === 36)
                && <PopUp gameOver={gameOver}
                          cardsGamer1={cardsGamer1}
                          cardsGamer2={cardsGamer2}
                          strokeNumber={strokeNumber}
                />
            }

            <PlayerCards numbersOfCards={cardsGamer2.length} gamer={'Gamer 2'}/>

        </article>
    );
}

export default FieldGame;