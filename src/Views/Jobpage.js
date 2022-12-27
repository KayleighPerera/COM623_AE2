import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Jobpage(props) {
  const StyledHeader = styled.h2`
    text-align: center;
    margin-top: 2%;
    margin-bottom: 5%;
  `;
  const StyledImage = styled.h2`
    text-align: center;
    margin-top: 2%;
    margin-bottom: 5%;
  `;

  const Text = styled.p`
    text-align: center;
    margin-top: 2%;
    margin-bottom: 5%;
    font-size: 30px;
  `;

  const StyledLink = styled(Link)`
    margin-left: 48%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.blue} 0%,
      ${({ theme }) => theme.colors.grey} 100%
    );
    color: #ffffff;
    font-size: 50px;
    border-radius: 20px;
  `;
  const CompanyInfo = styled.p`
    width: 50%;
    margin-left: 25%;
    text-align: center;
    font-size: 50px;
    border-radius: 20px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.grey} 0%,
      ${({ theme }) => theme.colors.blue} 100%
    );
  `;
  return (
    <div>
      <StyledHeader>Business Analyst - Microsoft</StyledHeader>
      <StyledImage>
        <img src={logo} alt="logo" />
      </StyledImage>
      <CompanyInfo>
        <div>
          <p>
            Microsoft<br></br>
            Business Analyst<br></br>
            Part-time<br></br>
          </p>
        </div>
      </CompanyInfo>
      <Text>
        <StyledHeader>
          <p> Skills Required: </p>
        </StyledHeader>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Nulla aliquet nulla vel dignissim molestie.</li>
        <li>
          Duis sodales nunc vitae dui accumsan, quis condimentum erat mollis.
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Nulla aliquet nulla vel dignissim molestie.</li>
        <li>
          Duis sodales nunc vitae dui accumsan, quis condimentum erat mollis.
        </li>
        <br></br>
        <StyledHeader>
          <p>Qualifications Required: </p>
        </StyledHeader>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
        <li>Nulla aliquet nulla vel dignissim molestie.</li>
        <li>
          Duis sodales nunc vitae dui accumsan, quis condimentum erat mollis.
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Nulla aliquet nulla vel dignissim molestie.</li>
        <li>
          Duis sodales nunc vitae dui accumsan, quis condimentum erat mollis.
        </li>
      </Text>
      <div>
        <StyledLink to="./SuccessJob"> Apply </StyledLink>
      </div>
    </div>
  );
}

export default Jobpage;
