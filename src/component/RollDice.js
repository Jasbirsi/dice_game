import React, { useState } from 'react'
import styled from 'styled-components';

const RollDice = ({currentDice , setCurrentDice}) => {



  const generateRandomNumber = (min , max) =>{
    return Math.floor(Math.random() * (max - min) + min) ;
    
  }

  const roleDice = () => {
    const randomNumber=generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);
  }

  return (
    <DiceContainer>
    <div  onClick={roleDice} className='dice'>
        <img src={`./images/dice_${currentDice}.png`} alt="dice" />
    </div>
    <p>Click on Dice to roll</p>
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