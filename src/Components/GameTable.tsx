import React from 'react';
import '../App.css';
import FieldForCards from "./FieldForCards";


function GameTable({cardGamer1, cardGamer2, compare, isMove}: any) {

    return <div className='fieldGame'>
                {
                    isMove &&
                    <FieldForCards cardGamer1={cardGamer1}
                                   cardGamer2={cardGamer2}
                                   compare={compare}/>
                }
            </div>
}

export default GameTable;