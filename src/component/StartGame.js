import React from 'react'
import styled from 'styled-components';


function StartGame(props) {
    return (
        <Container>
            <img src="./images/dices_1.png" alt="dice" />
            <div className='content'>
            <Heading>Dice Game</Heading>
            <Button onClick={props.toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame;

const Heading = styled.h1`
    font-family: Poppins;
    font-size: 96px;
    font-weight: 700;
    line-height: 144px;
    letter-spacing: 0em;
    text-align: left;
`;

const Container=styled.div`
    width:  1182px;
    height:  522px;
    top: 180px;
    left: 129px;
    gap: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    white-space: nowrap;
    margin-left: 150px;

    .content{
        display: flex;
        /* justify-content: end; */
        align-items: flex-end;
        flex-direction: column;
    }
`;
const Button=styled.button`
    color: white;
    padding: 10px 18px;
    background-color: black;
    border-radius: 5px;
    min-width: 220px;
    border: none;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        font-weight: bold;
    }


`;

