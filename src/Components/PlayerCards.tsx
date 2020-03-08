import React from 'react';
import '../App.css';
import CardDesk from "./CardDesk";


function PlayerCards({gamer, numbersOfCards}: any) {

    return <section>
                <h3>{gamer}</h3>
                <h3>{numbersOfCards}</h3>
                <CardDesk numbersOfCards={numbersOfCards}/>
            </section>
}

export default PlayerCards;