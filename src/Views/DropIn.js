import React from "react";
import styled from "styled-components";
import calendar from "../assets/calendar.png";

function DropIn(props) {
  const StyledHeadings = styled.h2`
    text-align: center;
    margin-top: 10%;
  `;

  const StyledHeader = styled.h2`
    text-align: center;
    margin-top: 2%;
  `;

  const Styledimage = styled.div`
    img {
      width: 100px;
      text-align: center;
    }
  `;

  return (
    <div>
      <StyledHeader>Drop In Sessions</StyledHeader>
      <StyledHeadings>
        Below are online and class timings for discussion and talks.
      </StyledHeadings>
      <StyledHeadings>
        <Styledimage>
          {" "}
          <img src={calendar} alt="calendar" />
        </Styledimage>
        Wednesday 5pm-6pm JM404
      </StyledHeadings>
      <StyledHeadings>
        <Styledimage>
          {" "}
          <img src={calendar} alt="calendar" />
        </Styledimage>
        Thursday 5pm-6pm online
      </StyledHeadings>
      <StyledHeadings>
        Contact solentfocus@solent.ac.uk for one to one sessions
      </StyledHeadings>
    </div>
  );
}

export default DropIn;
