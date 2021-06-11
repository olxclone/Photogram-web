import styled from "styled-components";

export let Container = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(30deg, #0693e3 25%, #c86486, #9c27b0);
`;

export let FormView = styled.div`
  border-radius: 50px;
  margin-right: 89;
  align-self: center;
  height: 90vh;
  width: 25vw;
  box-shadow: 5px 10px rgba(0,0,0,0.2);
  display: flex;
  background-color: #fff;
  flex-direction: column;
`;

export let Button = styled.div`
  border-radius: 70px;
  margin-top: 20px;
  align-self: center;
  height: 10vh;
  width: 12vw;
  box-shadow: #000;
  display: flex;
  background-image: linear-gradient(30deg, #0693e3 25%, #c86486, #9c27b0);
  flex-direction: column;
`;
