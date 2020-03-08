import React from 'react';
import '../App.css';
import PlayerCards from "./PlayerCards";
import GameTable from "./GameTable";


function FieldGame({cardsGamer1, cardsGamer2,
                       cardGamer1, cardGamer2,
                       compare, isMove}: any) {

    return (
        <article className="fieldGameContainer">

            <PlayerCards numbersOfCards={cardsGamer1.length} gamer={'Gamer 1'}/>
            <GameTable isMove={isMove}
                       cardGamer1={cardGamer1}
                       cardGamer2={cardGamer2}
                       compare={compare}/>
            <PlayerCards numbersOfCards={cardsGamer2.length} gamer={'Gamer 2'}/>

        </article>
    );
}

export default FieldGame;