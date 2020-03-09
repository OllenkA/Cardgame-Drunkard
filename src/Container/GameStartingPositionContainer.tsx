import React from 'react';
import {connect} from "react-redux";
import GameStartingPosition from "../Components/GameStartingPosition";


function GameStartingPositionContainer({cards}: any) {

    return <GameStartingPosition cardsArrayLength={cards.length}/>

}

const mapStateToProps = (state: any): any => ({
    cards: state.main.cards,
});

export default connect(mapStateToProps, {})(GameStartingPositionContainer);
