import React, { useEffect } from "react";
import firebase from "firebase";
import { Redirect, useHistory } from "react-router-dom";

const Loading = () => {
  let History = useHistory();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        return <Redirect to="/Home" />;
      } else {
       return <Redirect to="/Login" />;
      }
    });
  });
  return (
    <div>
      <h1>loading ......</h1>
    </div>
  );
};

export default Loading;
