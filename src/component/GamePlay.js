import React from 'react'
import Score from './Score';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';
import { useState } from 'react';
import ShowRules from './ShowRules';
function GamePlay() {
    const [showRules , setShowRules] = useState(false);
    const [totalScore , setTotalScore] = useState(0);
    const [numberSelected , setNumberSelected] = useState();
    const [currentDice , setCurrentDice] = useState(1); 
    const [error , setError] =useState();
    const generateRandomNumber = (min , max) =>{
        return Math.floor(Math.random() * (max - min) + min) ;
        
      }
    
      const roleDice = () => {
        if(!numberSelected){
            setError("You have not Selected any Number");
             return;
        }
        setError("");
        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber);

        
        if (numberSelected === randomNumber){
            setTotalScore((prev) => prev+randomNumber)
        }
        else{
            setTotalScore((prev) => prev -2);
        }
        setNumberSelected(undefined);
      }
        
    return (
        <MainContainer>
            <div className='top_section'> 
                <Score totalScore={totalScore}></Score>
                <NumberSelector setError={setError} error={error} numberSelected={numberSelected} setNumberSelected={setNumberSelected}></NumberSelector>
            </div>
            <RollDice  setShowRules={setShowRules} setTotalScore={setTotalScore} currentDice={currentDice} roleDice={roleDice}></RollDice>
            {showRules && <ShowRules></ShowRules>}
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