import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-inline: 1.25rem;
  min-height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #434c5e;
  color: #eceff4;
  border-radius: 0.325rem;
`;

const App = () => {
  return <Container>React + Typescript + Styled Components</Container>;
};

export default App;
