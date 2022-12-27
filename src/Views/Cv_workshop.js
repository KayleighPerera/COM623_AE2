import Histogram from "../Components/Histogram";
import React from "react";
import styled from "styled-components";
import ProgressBar from "../Components/ProgressBar";

const checkins = [
  { date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)" },
  { date: "Wed Jan 28 2020 07:17:11 GMT+0000 (Greenwich Mean Time)" },
  { date: "Wed Jan 27 2020 07:17:11 GMT+0000 (Greenwich Mean Time)" },
  { date: "Wed Jan 26 2020 07:17:11 GMT+0000 (Greenwich Mean Time)" },
  { date: "Wed Jan 25 2020 07:17:11 GMT+0000 (Greenwich Mean Time)" },
  { date: "Wed Jan 23 2020 07:17:11 GMT+0000 (Greenwich Mean Time)" },
  { date: "Wed Jan 22 2020 07:17:11 GMT+0000 (Greenwich Mean Time)" },
  { date: "Wed Jan 21 2020 07:17:11 GMT+0000 (Greenwich Mean Time)" },
  { date: "Wed Jan 20 2020 07:17:11 GMT+0000 (Greenwich Mean Time)" },
  { date: "Wed Jan 19 2020 07:17:11 GMT+0000 (Greenwich Mean Time)" },
  { date: "Wed Jan 18 2020 07:17:11 GMT+0000 (Greenwich Mean Time)" },
  { date: "Wed Jan 17 2020 07:17:11 GMT+0000 (Greenwich Mean Time)" },
  { date: "Wed Jan 16 2020 07:17:11 GMT+0000 (Greenwich Mean Time)" },
  { date: "Wed Jan 15 2020 07:17:11 GMT+0000 (Greenwich Mean Time)" },
];

function Cv(props) {
  const StyledDiv = styled.div`
    width: 50%;
    height: 50%;
    margin-left:25%;
  `;

  const StyledCv = styled.p`
    margin-top: 10%;
    text-align: left;
  `;

  const StyledHeader = styled.h2`
    text-align: center;
    margin-top: 2%;
    margin-bottom: 5%
  `;

  return (
    <div>
      <StyledHeader>CV Workshop</StyledHeader>
      <StyledDiv>
        <strong>50%</strong> TO GOAL!
        <Histogram barCount={7} bars={checkins.map((c) => c.score * 5)} />
        <ProgressBar percentage={50} />
        <h4 style={{ color: "#1F2041" }}> </h4>
      </StyledDiv>
      <StyledCv>Last checked in 11th October 2022</StyledCv>
      <textarea rows="20" cols="195" name="description">
        CV Display Lorem ipsum dolor sit amet, Donec luctus tempus massa, in
        iaculis lorem. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Sed feugiat tortor non magna volutpat
        eleifend. Integer eleifend massa a leo lacinia, ac porttitor mauris
        suscipit. Vivamus bibendum hendrerit odio eu tempor. Mauris et libero ac
        enim tristique luctus. Curabitur a aliquet eros. Proin sollicitudin
        maximus egestas. Pellentesque rhoncus eros eu mauris congue congue. Ut
        vel ipsum in ex elementum sagittis nec nec neque.Lorem ipsum dolor sit
        amet, Donec luctus tempus massa, in iaculis lorem. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed
        feugiat tortor non magna volutpat eleifend. Integer eleifend massa a leo
        lacinia, ac porttitor mauris suscipit. Vivamus bibendum hendrerit odio
        eu tempor. Mauris et libero ac enim tristique luctus. Curabitur a
        aliquet eros. Proin sollicitudin maximus egestas. Pellentesque rhoncus
        eros eu mauris congue congue. Ut vel ipsum in ex elementum sagittis nec
        nec neque.
      </textarea>
    </div>
  );
}

export default Cv;
