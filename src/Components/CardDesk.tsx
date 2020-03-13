import React from 'react';
import card1 from '../assets/rubashka.jpg';
import '../App.css';


interface IPropsCardDesk {
    numbersOfCards?: number,
    cardsArrayLength?: number,
}

function CardDesk({ numbersOfCards, cardsArrayLength}: IPropsCardDesk) {

    return <>
        {
            numbersOfCards !== 0 && cardsArrayLength !== 0
                ? <img src={card1} alt={'hi'}
                       className='cardDeskShadow'/>
                : <div className='cardDesk'/>
        }
    </>

}

export default CardDesk;
