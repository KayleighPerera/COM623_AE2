import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import GlobalStyles from "./config/globalStyles";
import theme from "./config/theme.js";
import Login from "./Views/Login";
import Info from "./Views/StudentInfo";
import Dash from "./Views/Dash";
import Join from "./Views/Join";
import DropIn from "./Views/DropIn";
import Cv from "./Views/Cv_workshop";
import Job from "./Views/Jobs";
import Jobpage from "./Views/Jobpage";
import SuccessCv from "./Views/SuccessCv";
import SuccessJob from "./Views/SuccessJob";
import useAuth from "./services/firebase/useAuth";
import { initializeApp } from "firebase/app";
import firebase from "../src/config/firebase";

const checkins = [
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    cv: 20,
  },
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    cv: 100,
  },
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    cv: 50,
  },
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    cv: 30,
  },
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    cv: 70,
  },
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    cv: 90,
  },
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    cv: 25,
  },
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    cv: 5,
  },
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    cv: 10,
  },
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    cv: 25,
  },
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    cv: 15,
  },
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    cv: 85,
  },
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    cv: 60,
  },
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    cv: 35,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);  
  const app = initializeApp(firebase);
  const { isAuthenticated } = useAuth();

  const location = useLocation();

  const handleClick = (e) => {
    setMenuOpen(!menuOpen);
  };

  const handleOuterWrapperClick = (e) => {
    setMenuOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        {location.pathname !== "/join" && (
          <Header onClick={handleClick} open={menuOpen} />
        )}
        <GlobalStyles />
        <div
          onClick={handleOuterWrapperClick}
          style={{ width: "100vw", height: "100vh" }}
        >
          <Switch>
            <Route exact path="/">
              <Dash checkins={checkins} />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/join">
              <Join />
            </Route>
            <Route path="/DropIn">
              <DropIn />
            </Route>
            <Route path="/StudentInfo">
              <Info />
            </Route>
            <Route path="/Cv_workshop">
              <Cv />
            </Route>
            <Route path="/Jobs">
              <Job />
            </Route>
            <Route path="/Jobpage">
              <Jobpage />
            </Route>
            <Route path="/SuccessCv">
              <SuccessCv />
            </Route>
            <Route path="/SuccessJob">
              <SuccessJob />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
