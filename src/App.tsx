import React from 'react';
import './App.css';
import Header from "./Components/Header";
import FieldGameContainer from "./Container/FieldGameContainer";
import GameStartingPositionContainer from "./Container/GameStartingPositionContainer";
import ButtonsContainer from "./Container/ButtonsContainer";


function App() {

    return (
        <div className="App">
            <div className='App_wrapper'>
                <div className='App_container'>
                    <Header/>
                    <ButtonsContainer/>
                    <GameStartingPositionContainer/>
                </div>
                <FieldGameContainer/>
            </div>
        </div>
    );
}

export default App;
