import React from "react";
import styled from "styled-components";


function Job(props) {
  const StyledHeader = styled.h2`
    text-align: center;
    margin-top: 2%;
    margin-bottom: 5%;
  `;

  return (
    <div>
      <StyledHeader>Jobs</StyledHeader>
      
    </div>
  );
}

export default Job;
