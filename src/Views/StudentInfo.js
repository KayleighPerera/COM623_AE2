import React from "react";
import Tile from "../Components/Tile";
import styled from "styled-components";
import profile from "../assets/profile.jpg";

function Info(props) {
  const StyledImage = styled.div`
    img {
      margin-top: 5%;
      width: 22%;
      border-radius: 50%;
      float: left;
      margin-bottom: 3%;
    }
  `;

  const StyledHeader = styled.h2`
    text-align: center;
    margin-top: 2%;
  `;

  const StyledDiv = styled.div`
    width: 50%;
    height: 50%;
  `;

  const StyledText = styled.p`
    display: inline-block;
    margin-top: 10%;
  `;

  const StyledCv = styled.p`
    margin-top: 40%;
    text-align: left;
  `;

  return (
    <div>
      <StyledHeader>Student Information</StyledHeader>
      <StyledImage>
        {" "}
        <img src={profile} alt="profile" />
        <StyledText>Kayleigh Perera 20yrs - 3rd Year - Computing</StyledText>
      </StyledImage>
      <StyledDiv>
        <StyledCv>Last checked in 11th October 2022</StyledCv>
        <textarea rows="20" cols="195" name="description">
          CV Display Lorem ipsum dolor sit amet, Donec luctus tempus massa, in
          iaculis lorem. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Sed feugiat tortor non magna volutpat
          eleifend. Integer eleifend massa a leo lacinia, ac porttitor mauris
          suscipit. Vivamus bibendum hendrerit odio eu tempor. Mauris et libero
          ac enim tristique luctus. Curabitur a aliquet eros. Proin sollicitudin
          maximus egestas. Pellentesque rhoncus eros eu mauris congue congue. Ut
          vel ipsum in ex elementum sagittis nec nec neque.Lorem ipsum dolor sit
          amet, Donec luctus tempus massa, in iaculis lorem. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed
          feugiat tortor non magna volutpat eleifend. Integer eleifend massa a
          leo lacinia, ac porttitor mauris suscipit. Vivamus bibendum hendrerit
          odio eu tempor. Mauris et libero ac enim tristique luctus. Curabitur a
          aliquet eros. Proin sollicitudin maximus egestas. Pellentesque rhoncus
          eros eu mauris congue congue. Ut vel ipsum in ex elementum sagittis
          nec nec neque.
        </textarea>
      </StyledDiv>
    </div>
  );
}

export default Info;
