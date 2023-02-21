import styled from "styled-components";

import {
  LightSlateBlue,
  LightRoyalBlue,
  LightLavender,
  VioletBlue,
  PersianBlue,
  White,
  DarkGrayBlue,
} from "../../styles/colors";

export const SummaryContainer = styled.main`
  max-width: 40%;
  display: flex;

  @media (max-width: 1380px) {
    max-width: 50%;
  }

  @media (max-width: 1150px) {
    max-width: 55%;
  }

  @media (max-width: 1050px) {
    max-width: 60%;
  }

  @media (max-width: 900px) {
    max-width: 65%;
  }

  @media (max-width: 850px) {
    max-width: 70%;
  }

  @media (max-width: 750px) {
    max-width: 80%;
  }

  @media (max-width: 650px) {
    max-width: 85%;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const CardSection = styled.section`
  flex: 1;
  padding: 1rem;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem 0;
  border-radius: 2rem;
  background-image: linear-gradient(
    to bottom,
    ${LightSlateBlue},
    ${LightRoyalBlue}
  );

  h2 {
    color: white;
    text-transform: capitalize;
    font-size: 1.8rem;
    color: ${LightLavender};
    margin-bottom: 2rem;
  }

  span {
    color: ${White};
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${LightLavender};
    text-align: center;
    width: 70%;
    font-size: 1.3rem;
  }
`;

export const Score = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(to bottom, ${VioletBlue}, ${PersianBlue});
  margin-bottom: 2rem;

  p {
    font-size: 5.5rem;
    color: ${White};
    font-weight: 800;
  }

  span {
    color: ${LightLavender};
    font-size: 1.3rem;
    margin-top: -1rem;
    font-weight: 700;
  }
`;

export const SummarySection = styled.section`
  flex: 1;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h2 {
    font-size: 1.7rem;
    color: ${DarkGrayBlue};
    margin-bottom: 3.5rem;
  }

  button {
    width: 80%;
    padding: 1.5rem 1rem;
    border: none;
    border-radius: 5rem;
    background-color: ${DarkGrayBlue};
    color: ${White};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: ${LightRoyalBlue};
    }
  }
`;

export const SkillsSummary = styled.div`
  width: 100%;
  margin-left: 1.5rem;
`;

export const SkillContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 3.5rem;

  h3 {
    margin-left: 0.8rem;
    font-size: 1.4rem;
  }

  p {
    margin-left: auto;
    font-size: 1.4rem;
    color: ${DarkGrayBlue};

    span {
      color: ${LightLavender};
    }
  }
`;
