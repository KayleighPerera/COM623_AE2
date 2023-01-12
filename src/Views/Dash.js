import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Home from "../Components/home";
import useProgress from "../services/firebase/useProgress";

function Dash(props) {
  const { getProgress } = useProgress();
  const [progress, setProgress] = useState([]);
  const getProgressData = async () => {
    const progressSnap = await getProgress();
    let progress = [];
    if (progressSnap.size) {
      progressSnap.forEach((doc) => {
        progress.push({ ...doc.data(), ...{ id: doc.id } });
      });
      setProgress(progress.reverse());
    }
  };

  useEffect(() => {
    getProgressData();
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
}

Dash.propTypes = {
  progress: PropTypes.array.isRequired,
};

export default Dash;
