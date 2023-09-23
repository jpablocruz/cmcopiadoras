import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
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
  justify-content: space-around;
`;

export const ContactDirection = styled.div`
  width: 50%;
  height: auto;
  background: white;
  border-radius: 1vh;
`;

export const GMapsContainer = styled.div`
  height: auto;
`;

export const Circle = styled.div`
  background: red;
  border-radius: 10rem;
  height: 5vh;
  width: 5vh;
`;
