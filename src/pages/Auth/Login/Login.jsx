import {
  Avatar,
  Input,
  InputAdornment,
  Alert,
  TextField,
} from "@material-ui/core";
import { AccountCircle, Lock } from "@material-ui/icons";
import React, { useState } from "react";
import { Container, FormView, Button } from "./Login.styles";
import fire from "../../../Utils/firebase";

export default function Login() {
let [password,setPassword] = useState()
  let [email, setEmail] = useState("");
  let Login = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((d) => console.log("done"))
      .catch((e) => alert(e.message));
  };
  return (
    <Container>
      <FormView>
        <h1
          style={{ textAlign: "center", fontFamily: "sans-serif", margin: 30 }}
        >
          Photogram
        </h1>
        <label>
          <Input
            vslue={email}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Email"}
            style={{ marginLeft: "10%", marginRight: "10%", padding: 18 }}
          />
        </label>

        <Input
          placeholder={"Password"}
          onChange={(p) => setPassword(p.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          }
          style={{
            marginLeft: "10%",
            marginRight: "10%",
            padding: 18,
          }}
        />
        <Button onClick={() => Login()}>
          <h4 style={{ textAlign: "center", color: "#fff" }}>Login</h4>
        </Button>
        <h4 style={{ textAlign: "center" }}>------ OR -------</h4>
        <img
          style={{ height: 50, width: 50, alignSelf: "center" }}
          src={
            "https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
          }
        />
        <h5
          style={{
            position: "absolute",
            bottom: 20,
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          Don't have an account ? Register Here
        </h5>
      </FormView>
    </Container>
  );
}
