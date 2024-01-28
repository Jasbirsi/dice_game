import React from 'react'
import styled from 'styled-components';

function Score() {
  return (
    <ScoreContainer>
      <div>
        <CurrentScore>0</CurrentScore>
        <span>Total Score</span>
      </div>
    </ScoreContainer>
  )
}

export default Score;

const ScoreContainer = styled.div`
    width: 1280px;
    height: 151px;
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    font-family: Poppins;
    
    span {
        font-family: Poppins;
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: left;

    }

`;
const CurrentScore = styled.h1`
    font-family: Poppins;
    font-size: 100px;
    /* font-weight: 500; */
    margin: 0 20px;
`;