import React from "react";
import Tile from "../Components/Tile";
import styled from "styled-components";
import book from "../assets/book.png"
import { useLocation } from "react-router-dom";

function SuccessCv(props) {
  const location = useLocation();
  const StyledImage = styled.div`
    img {
      margin-top: 8%;
      margin-left: 25%;
      width: 40%;
    }
  `;

  const Page = styled.div`
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.grey} 0%,
      ${({ theme }) => theme.colors.blue} 100%
    );
  `;

  const Text1 = styled.p`
    justify-content: center;
    display: flex;
    text-align: center;
    font-size: 70px;
    font-weight: bold;
  `;
  return (
    <Page>
      <Tile>
        <Text1>
          <br></br>You have Successfully  <br></br>sent your CV  <br></br> to
          Solent Focus!
        </Text1>
        <StyledImage>
          <img src={book} alt="books" />
        </StyledImage>
      </Tile>
    </Page>
  );
}

export default SuccessCv;
