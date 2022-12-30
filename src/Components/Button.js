import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Button(props) {
  const { onClick, text } = props;

  const StyledButton = styled.button`
    font-size: 40px;
    height: 44.63px;
    background: linear-gradient(180deg, #34acef 75%, #e9e9ec 100%);
    border-radius: 22px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 50%;
    margin-top: 6%;
    margin-left: 25%;
  `;

  return <StyledButton onClick={onClick}> {text} </StyledButton>;
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
