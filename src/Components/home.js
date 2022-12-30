import React from "react";
import Tile from "./Tile";
import styled from "styled-components";
import work from "../assets/work.png";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";

function Home(props) {
  const location = useLocation();
  const StyledImage = styled.div`
    img {
      margin-top: 8%;
      margin-left: 25%;
      width: 55%;
    }
  `;

  const StyledLi = styled.li`
    cursor: pointer;
    width: 100%;
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-top: 20px;
  `;

  const Text1 = styled.p`
    margin-left: 20px;
    justify-content: center;
    text-align: center;
    display: flex;
    align-items: center;
    margin-top: 60px;
    font-size: 30px;
  `;
  return (
    <Tile>
      <Text1>
        This application will help you <br></br>write a cv and find a suitable job
      </Text1>
      <Button text="Get Started" type="submit" />
      <StyledLi active={location.pathname === "/"}>
        <Link to="/Login"> Or Log In </Link>{" "}
      </StyledLi>
      <StyledImage>
        <img src={work} alt="avatar" />
      </StyledImage>
    </Tile>
  );
}

Home.propTypes = {};

export default Home;
