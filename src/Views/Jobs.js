import React from "react";
import styled from "styled-components";
import jobone from "../assets/jobone.png";
import jobtwo from "../assets/jobtwo.png";
import jobthree from "../assets/jobthree.png";
import jobfour from "../assets/jobfour.png";
import otherone from "../assets/otherone.png";
import othertwo from "../assets/othertwo.png";
import otherthree from "../assets/otherthree.png";
import otherfour from "../assets/otherfour.png";

function Job(props) {
  const StyledHeader = styled.h2`
    text-align: center;
    margin-top: 2%;
    margin-bottom: 5%;
  `;
  
  const StyledSubHeader = styled.h3`
    text-align: center;
    margin-top: 2%;
    margin-bottom: 5%;
  `;

  const SectionOne = styled.h3`
  text-align: center;
    img{
    margin-right: 30px; 
    margin-bottom: 30px;  
    border: 2px solid skyblue;
    `;

const SectionTwo = styled.h3`
  text-align: center;
    img{
    margin-right: 30px; 
    margin-bottom: 30px;  
    border-radius: 4px;
    `;


  return (
    <div>
      <StyledHeader>Jobs</StyledHeader>
      <StyledSubHeader>Suggested Jobs for you:</StyledSubHeader>
      <SectionOne>
        {/* 1 */}
        <a href="./JobPage">
          <img src={jobone} alt="jobone" />
        </a>
        {/* 2 */}
        <a href="./">
          <img src={jobtwo} alt="jobtwo" />
        </a>
        {/* 3 */}
        <a href="./">
          <img src={jobthree} alt="jobthree" />
        </a>
        {/* 4 */}
        <a href="./">
          <img src={jobfour} alt="jobfour" />
        </a>
      </SectionOne>
      <StyledSubHeader>Other Jobs:</StyledSubHeader>
      <SectionTwo>
        {/* 1 */}
        <a href="./">
          <img src={otherone} alt="otherone" />
        </a>
        <p>Company name</p>
        <p>Job seeking</p>
        <p>Temporary/ part-time</p>
        {/* 2 */}
        <a href="./">
          <img src={othertwo} alt="othertwo" />
        </a>
        <p>Company name</p>
        <p>Job seeking</p>
        <p>Temporary/ part-time</p>
        {/* 3 */}
        <a href="./">
          <img src={otherthree} alt="otherthree" />
        </a>
        <p>Company name</p>
        <p>Job seeking</p>
        <p>Temporary/ part-time</p>
        {/* 4 */}
        <a href="./">
          <img src={otherfour} alt="otherfour" />
        </a>
        <p>Company name</p>
        <p>Job seeking</p>
        <p>Temporary/ part-time</p>
      </SectionTwo>
    </div>
  );
}

export default Job;
