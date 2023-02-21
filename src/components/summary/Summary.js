import React, { useState, useEffect } from "react";

import {
  SummaryContainer,
  CardSection,
  SummarySection,
  Card,
  Score,
  SkillsSummary,
  SkillContainer,
} from "./Summary.styles";

import scoredata from "../../utils/data";

const Summary = () => {
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const scores = scoredata.map((el) => el.score);
    const total = scores.reduce((acc, curr) => (acc += curr), 0);
    const average = total / scores.length;
    setTotalScore(Math.round(average));
  }, []);

  return (
    <SummaryContainer>
      <CardSection>
        <Card>
          <h2>your result</h2>
          <Score>
            <p>{totalScore}</p>
            <span>of 100</span>
          </Score>
          <span>Great</span>
          <p>
            You scored higher then 65% of the people who have taken these tests
          </p>
        </Card>
      </CardSection>
      <SummarySection>
        <h2>Summary</h2>
        <SkillsSummary>
          {scoredata.map(({ category, score, icon, color }, index) => (
            <SkillContainer key={index}>
              <img src={icon} alt="skill" />
              <h3 style={{ color: color }}>{category}</h3>
              <p>
                {score} <span>/ 100</span>
              </p>
            </SkillContainer>
          ))}
        </SkillsSummary>
        <button>Continue</button>
      </SummarySection>
    </SummaryContainer>
  );
};

export default Summary;
