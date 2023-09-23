import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #f1f1f1;
`;

export const ContactHeadline = styled.div`
  display: flex;
  width: 100%;
  background: #f1f1f1;
  height: 10vh;
  justify-content: center;
  align-items: center;
  padding-top: 3vh;
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: #f1f1f1;
  height: auto;
  justify-content: center;
  gap: 4vw;
`;

export const ContactDirection = styled.div`
  width: 50%;
  height: 70vh;
  background: white;
  border-radius: 1vh;
`;

export const GMapsContainer = styled.div`
  height: auto;
`;

export const Circle = styled.div`
  background: #8b0000;
  border: 10px solid red;
  border-radius: 10rem;
  height: 3vh;
  width: 3vh;
  color: white;
  text-align: center;
  font-size: 5px;
  justify-content: center;
`;
