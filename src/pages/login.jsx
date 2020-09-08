import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {
  TextField,
  Card,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import "../Styles/Login.css";
import { signIn } from "../services/userServices";
const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        boxShadow: "1px",
      },
    },
    MuiTextField: {
      root: {
        height: "13vh",
      },
    },
    MuiInputBase: {
      root: {
        height: "9vh",
      },
    },
  },
});
const regexValidateEmail = new RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);
const regexvalidatePassword = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
);
class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
      },
      errorValid: {
        email: false,
        password: false,
        whole: false,
      },
      enable: true,
    };
  }

  handleEmailInput = (event) => {
    this.setState({
      email: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    if (!regexValidateEmail.test(event.target.value)) {
      errors.email = "enter valid email id";
      validate = true;
    } else {
      errors.email = "";
    }
    this.setState({
      errorValid: { email: validate },
      errors: { email: errors.email },
    });
  };
  handlePasswordInput = (event) => {
    this.setState({
      password: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    if (!regexvalidatePassword.test(event.target.value)) {
      errors.password = "enter valid password";
      validate = true;
    } else {
      errors.password = "";
    }
    this.setState({
      errorValid: { password: validate },
      errors: { password: errors.password },
    });
  };

  handleSubmit = (event) => {
    if (this.state.email === "" && this.state.password === "") {
      this.setState({
        errorValid: { email: true, password: true },
        errors: {
          email: "email should not be empty",
          password: "password should not be empty",
        },
      });
    }
    if (
      this.validateForm() &&
      this.state.email !== "" &&
      this.state.password !== ""
    ) {
      let loginData = {
        email: this.state.email,
        password: this.state.password,
      };
      signIn(loginData).then((response) =>{
        console.log(response);
        
        let token=response.data.id;
        localStorage.setItem('tokenId',token)
        console.log(token)
        if(response.status!==200){
          this.setState({
            errorValid: { email: true, password: true },
            errors: {
              password: "incorrect password",
            },
          });
        }
      });
      
      this.setState({
        email: "",
        password: "",
      });
    } else {
      console.log("invalid form");
      this.setState({
        email: "",
        password: "",
      });
    }
  };
  handleRouter = () => {
    this.props.history.push("/register");
  };

  validateForm() {
    let valid = true;
    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
  handleResetPassword = (event) => {
    this.props.history.push("/emailVerification");
  };
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="loginContainer">
          <Card id="siginCard">
            <div className="innerCard">
              <div className="inputDiv">
                <TextField
                  className="textFields"
                  id="emailField"
                  label="Email id"
                  type="text"
                  placeholder="email id"
                  variant="outlined"
                  value={this.state.email}
                  error={this.state.errorValid.email}
                  onChange={this.handleEmailInput}
                  helperText={this.state.errors.email}
                />

                <TextField
                  className="passwordtextField"
                  id="passwordField"
                  label="Password"
                  type="password"
                  placeholder="password"
                  variant="outlined"
                  value={this.state.password}
                  error={this.state.errorValid.password}
                  onChange={this.handlePasswordInput}
                  helperText={this.state.errors.password}
                />
                <div
                  className="resetPassword"
                  onClick={this.handleResetPassword}
                >
                  Reset Password
                </div>

                <Button onClick={this.handleSubmit} className="submitButton">
                  submit
                </Button>

                <Button
                  onClick={this.handleRouter}
                  className="alignButton"
                  color="secondary"
                >
                  Register
                </Button>
                <div className="signupAlignment">
                  Don't have account with us?
                </div>
              </div>
            </div>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default withRouter(login);
