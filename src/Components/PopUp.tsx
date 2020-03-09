import React from "react";
import {ICardsInterface} from "../redux/interfaces";


interface IPopUp {
    gameOver: () => void,
    cardsGamer1: ICardsInterface[],
    cardsGamer2: ICardsInterface[],
    strokeNumber: number,
}

function PopUp({gameOver, cardsGamer1, cardsGamer2, strokeNumber}: IPopUp) {

    return (
        <article className='container'>
            <section className='popupMain'>
                <span onClick={gameOver} className='span'>
                   X
                </span>
                <h2>Winner:
                    {cardsGamer1.length === 6?
                        <h3>Gamer 1</h3>
                        :cardsGamer2.length === 6
                            ?<h3>Gamer 2</h3>
                            :null}
                </h2>
                <h2>Number of moves:
                <h3>{strokeNumber}</h3>
                </h2>
            </section>
        </article>
    );
}

export default PopUp;