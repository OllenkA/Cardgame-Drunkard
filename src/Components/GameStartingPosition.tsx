import React from 'react';
import '../App.css';
import CardDesk from "./CardDesk";


interface IPropsGameStartingPosition {
    cardsArrayLength: number
}

function GameStartingPosition({cardsArrayLength}: IPropsGameStartingPosition) {

    return <article className="cardDeskContainer">
        <CardDesk cardsArrayLength={cardsArrayLength}/>
    </article>

}

export default GameStartingPosition;