import { styled } from "styled-components";

export const CTAContainer = styled.div`
  display: flex;
  padding-top: 8vh;
  width: 100%;
  height: 50vh;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0;
    text-align: center;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: white;
  height: 40vh;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    height: auto;
    text-align: center;
    padding-bottom: 3rem;
  }
`;
export const Stat = styled.div`
  align-items: center;
  height: 15vh;
  width: 10%;
  background: white;
`;
export const StatInfo = styled.div`
  text-align: center;
`;
