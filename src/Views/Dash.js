import React from "react";
import PropTypes from "prop-types";
import DaysCompleted from "../Components/DaysCompleted";
import Home from "../Components/home";
import Cv from "./Cv_workshop";

function Dash(props) {
  const { checkins } = props;

  return (
    <div>
      <Home />
    </div>
  );
}

Dash.propTypes = {
  checkins: PropTypes.array.isRequired,
};

export default Dash;
