import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function ProgressBar(props) {
  const { percentage } = props;

const barStyle = {
  background: "rgba(52, 172, 239, 1)",
  width: "100%",
  height: "13px",
  borderRadius: "2px",
  display: "flex",
  alignItems: "flex-end", // align the inner bar to the end of the the outer box
};

const innerBar = {
  background: "linear-gradient(180deg, #EDE9E8 100%, #FFFFFF 100%)",
  opacity: "100 !important",
  height: `100%`,
  width: `${percentage}%`,
  borderRadius: "2px",
};


  return (
    <div style={barStyle}>
      <div style={innerBar}></div>
    </div>
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default ProgressBar;
