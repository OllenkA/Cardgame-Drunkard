import React from 'react';
import '../App.css';
import Card from "./Card";
import {ICardsInterface} from "../redux/interfaces";


interface IPropsGameTable {
    cardGamer1: ICardsInterface[],
    cardGamer2: ICardsInterface[],
    compare: string,
    gameMove: () => void,
    pickUpCards: () => void,
    compareGameCards: () => void,
}

function FieldForCards({gameMove, pickUpCards,
                           compareGameCards,
                           cardGamer1, cardGamer2, compare
                       }: IPropsGameTable) {

    const compareCards = (compare: string) => {

        switch (compare) {
            case '-1':
                return <div className='gameTable_sign'> &lt; </div>;
            case '1':
                return <div className='gameTable_sign'> &gt; </div>;
            case '0':
                return <div className='gameTable_sign'> = </div>;
        }
    };

    const pickUp = () => {
        if (compare === '0') {
            gameMove();
            compareGameCards();
        } else {
            pickUpCards()
        }
    };

    return <article className='fieldGame' onClick={pickUp}>
        <section className="gameTable">

            <Card card={cardGamer1[0]}/>

            {compare && ((cardGamer2.length && cardGamer1.length) !== 0)
            && compareCards(compare)}

            <Card card={cardGamer2[0]}/>

        </section>
    </article>
}

export default FieldForCards;