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
  background: blue;
  height: 40vh;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    height: auto;
    text-align: center;
  }
`;
export const Stat = styled.div`
  align-items: center;
  height: 15vh;
  width: 10%;
  background: #51d1f6;
`;
export const StatInfo = styled.div`
  display: flex;
`;
