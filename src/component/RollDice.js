import React, { useState } from 'react'
import styled from 'styled-components';

const RollDice = ({ setShowRules , setTotalScore ,currentDice , roleDice}) => {
const resetScore = () => {
  setTotalScore(0);
} 
const showRules = () => {
  setShowRules((prev) => !prev);
  
}


  return (
    <DiceContainer>
    <div  onClick={roleDice} className='dice'>
        <img src={`./images/dice_${currentDice}.png`} alt="dice" />
    </div>
    <p>Click on Dice to roll</p>
    <Button onClick={resetScore}>Reset Score</Button>
    <Button onClick={showRules} >Show rules</Button>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top : 48px;
  flex-direction: column;

  .dice{
    cursor: pointer;
  }

  p{
    font-size: 24px;
  }
`;

const Button =styled.button`
    height: 50px;
    width: 237px;
    font-weight: bold;
    font-size: 22px;
    background: #3a3333;
    color: white;
    margin-bottom: 20px;

    &:hover{
      cursor: pointer;
    }
`;