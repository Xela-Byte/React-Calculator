import styled, { css } from "styled-components";

export const Centering = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalculatorContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
`;

export const CalculatorComputeContainer = styled.div`
  width: 100%;
  height: 15%;
  background: #eee;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 2%;
  font-size: 30px;
  border: 1px solid gray;
  @media screen and (max-width: 990px) {
    align-items: center;
    padding: 20px;
  }
`;

export const CalculatorNumberContainer = styled.div`
  width: 40%;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  height: 75%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 990px) {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    width: 100%;
  }
`;

export const CalculatorNumberContent = styled.div`
  flex: 1 1 33.333%;
  max-width: 33.333%;
  @media screen and (max-width: 990px) {
    padding: 20px;
    &:last-child {
      max-width: 100%;
    }
  }
`;

export const CalculatorNumberTab = styled.div`
  width: 70px;
  height: 70px;
  ${Centering}
  border-radius: 50%;
  background: #e7e7e0;
  cursor: pointer;
  transition: 0.4s ease-in;
  &:hover {
    background: #eee;
  }
  font-size: 30px;
`;
