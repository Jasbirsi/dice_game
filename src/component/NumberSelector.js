import React, { useState } from 'react'
import styled
 from 'styled-components';
function NumberSelector({setError, numberSelected , setNumberSelected , error}) {
    const arrNumber = [1,2,3,4,5,6];

    const numberSelectorHandler= (value) => {
        setNumberSelected(value);
        setError("");
    }

  return (
    <>
        <NumberSelectorContainer>
            <span>{error}</span>
            <div className='flex'>
        {
            arrNumber.map((value , i) =>(
                <Box isSelected ={value ===numberSelected}
                onClick={ () =>numberSelectorHandler(value) } key={i} >{value }</Box>
            ))
        } 
        </div>
        <p>Selected Number</p> 
        </NumberSelectorContainer>        
    </>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;

    span{
        color: red;
        font-size: 20px;
        padding-bottom: 10px;
    }
    
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
   
`;

const Box = styled.div`
    width: 72px;
    height: 72px;
    padding: 18px, 0px, 18px, 0px;
    border: 1px;
    display: grid;
    place-items: center;
    border: 2px solid black;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};

`;