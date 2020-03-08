import React from 'react';
import '../App.css';
import Card from "./Card";


function FieldForCards({cardGamer1, cardGamer2, compare}: any) {

    return <article className="gameTable">

        <Card card={cardGamer1[0]}/>
        <div>{compare === '-1'?'<<<': compare === '1'?'>>>':'==='}</div>
        <Card card={cardGamer2[0]}/>

    </article>
}

export default FieldForCards;
