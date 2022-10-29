import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/HomePage";
import Spots from "./components/Spots";
import CreateSpot from "./components/Spots/createSpot";
import EditSpot from "./components/Spots/EditSpot";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route exact path="/dev">
              <EditSpot />
            </Route>
            <Route exact path="/login">
              <LoginFormPage />
            </Route>
            <Route exact path="/">
              <Spots />
            </Route>
            <Route exact path="/create-spot">
              <CreateSpot />
            </Route>

            {/* <Home />
          <Navigation /> */}

            <Route exact path="/signup">
              <SignupFormPage />
            </Route>
          </Switch>
        )}
      </>
    )
  );
}

export default App;
