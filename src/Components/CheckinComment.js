import React from "react";
import Tile from "./Tile";
import styled from "styled-components";
import avatarSmall from "../assets/avatar_small.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Histogram from "./Histogram";
import work from "../assets/work.png";
import Button from "../Components/Button";
import { Link, useLocation } from "react-router-dom";


function CheckinComment(props) {
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
    font-size: 50px;
    margin-top: 20px;
  `;

  const text = styled.p`
    margin-left: 20px;
  `;
  return (
    <Tile>
      <text>
        This application will help you write a cv and find a suitable job
      </text>
      <Button text="get started" type="submit" />
      <StyledLi active={location.pathname === "/"}>
        <Link to="/Login"> Or Log In </Link>{" "}
      </StyledLi>
      <StyledImage>
        <img src={work} alt="avatar" />
      </StyledImage>
    </Tile>
  );
}

CheckinComment.propTypes = {};

export default CheckinComment;
