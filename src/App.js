import React, { memo, useEffect, useState } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Router,
  Switch,
} from "react-router-dom";

import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Home from "./pages/Main/Home/Home";
import fire from "./Utils/firebase";

function App(params) {
  let [user, setUser] = useState(false);
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  });
  return (
    <BrowserRouter>
      <Switch>
        <Route
          render={() => {
            return user ? <Redirect to="/Home" /> : <Redirect to="/Login" />;
          }}
        />
        <Route path="/Home" component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default memo(App);
