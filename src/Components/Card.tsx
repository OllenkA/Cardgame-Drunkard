import React from 'react';
import '../App.css';


function Card({card}:any) {

    return <>
        {card && <div key={card.id} className='card'>
            <section className='numberField'>
                <b>{card.number}</b>
                <b>{card.number}</b>
            </section>
            <img src={card.picture} alt={'hi'} className='img'/>
            <section className='numberField'>
                <b>{card.number}</b>
                <b>{card.number}</b>
            </section>
        </div>}
    </>
}

export default Card;