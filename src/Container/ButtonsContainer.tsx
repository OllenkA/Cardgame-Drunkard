import React from "react";
import {connect} from "react-redux";
import {compareGameCards, gameMove, pickUpCards, startGame, shuffleCards} from "../redux/mainReducer";
import Buttons from "../Components/Buttons";

function ButtonsContainer({startGame, gameMove, compareGameCards, compare, pickUpCards, shuffleCards}: any) {

    const startTheGame = async () => {
        await gameMove();
        compareGameCards();
    };

    let pickUp = () => {
        if(compare === '0'){
            gameMove()
        }else{
            pickUpCards()
        }
        // compare === '0' ? gameMove() : pickUpCards();
    };

    return <Buttons startGame={startGame}
                    pickUp={pickUp}
                    startTheGame={startTheGame}
                    shuffleCards={shuffleCards}/>
}

const mapStateToProps = (state: any): any => ({
    compare: state.main.compare,
});


export default connect(mapStateToProps,
    {gameMove, compareGameCards, pickUpCards, startGame, shuffleCards})(ButtonsContainer);