import React from "react";


interface IPropsButtons {
    startGame: () => void,
    startTheGame: () => void,
    pickUp: () => void,
    shuffleCards: () => void,
}

function Buttons({startTheGame, pickUp, startGame, shuffleCards}: IPropsButtons) {
    return (
        <section className='buttonsWrapper'>

            <button onClick={shuffleCards} className='buttonsWrapper_button'>
                Shuffle cards - Тасовать карты
            </button>
            <button onClick={startGame} className='buttonsWrapper_button'>
                Deal cards - Раздать карты
            </button>
            <button onClick={startTheGame} className='buttonsWrapper_button'>
                MOVE - Ходить
            </button>
            <button onClick={pickUp} className='buttonsWrapper_button'>
                End turn - Закончить ход
            </button>

        </section>
    );
}

export default Buttons;