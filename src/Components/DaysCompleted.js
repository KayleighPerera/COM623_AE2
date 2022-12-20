import React from "react";
import PropTypes from "prop-types";
import Tile from "./Tile";
import styled from "styled-components";

function DaysCompleted(props) {
  const { days, checkins } = props;

  const StyledDaysCompleteHeading = styled.h2`
    text-align: center;
    color: ${(props) => props.theme.colors.purple};
  `;

  const StyledRootDiv = styled.div`
    display: grid;
    grid-template-columns: 0.8fr;
    grid-template-rows: 55px 80px 20px auto;
    justify-content: center;
  `;

  const StyledGoalHeading = styled.h4`
    color: #1f2041;
  `;

  return (
    <Tile>
      <StyledRootDiv></StyledRootDiv>
    </Tile>
  );
}

export default DaysCompleted;
