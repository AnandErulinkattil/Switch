import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-top: 20px;
  width: 300px;
  padding: 20px;
  background-color: aliceblue;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const BulbBox = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  `;

const Bulb = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
  background-color: ${(props) => props.bgColor || 'green'};
`;

const StyledButton = styled.button`
  margin-top: 10px;
`;

function Switch() {
  const [bulb1, setBulb1] = useState({
    current: 'lightgreen',
    previous: 'lightgreen',
  });
  const [bulb2, setBulb2] = useState({
    current: 'lightgreen',
    previous: 'lightgreen',
  });

  const handleBulb1Click = () => {
    setBulb1((prevColors) => {
      const newColor =
        prevColors.current === 'lightgreen' ? 'lightcoral' : 'lightgreen';
      return { current: newColor, previous: prevColors.current };
    });
  };

  const handleBulb2Click = () => {
    setBulb2((prevColors) => {
      const newColor =
        prevColors.current === 'lightgreen' ? 'lightcoral' : 'lightgreen';
      return { current: newColor, previous: prevColors.current };
    });
  };

  return (
    <Box>
      <BulbBox>
        <Bulb bgColor={bulb1.current}></Bulb>
        <Bulb bgColor={bulb2.current}></Bulb>
      </BulbBox>

      <BulbBox>
        <StyledButton onClick={handleBulb1Click}>
          ON/OFF
        </StyledButton>
        <StyledButton onClick={handleBulb2Click}>
          ON/OFF
        </StyledButton>
      </BulbBox>
    </Box>
  );
}

export default Switch;