import React from 'react'
import Score from './Score';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';
import { useState } from 'react';
function GamePlay() {
    const [numberSelected , setNumberSelected] = useState();
    const [currentDice , setCurrentDice] = useState();    
    return (
        <MainContainer>
            <div className='top_section'>
                <Score></Score>
                <NumberSelector numberSelected={numberSelected} setNumberSelected={setNumberSelected}></NumberSelector>
            </div>
            <RollDice currentDice={currentDice} setCurrentDice={setCurrentDice}></RollDice>
        </MainContainer>
    )
}

export default GamePlay;

const MainContainer = styled.div`
    margin: 20px 100px;
    font-weight: bold;
    font-family: poppins;
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;