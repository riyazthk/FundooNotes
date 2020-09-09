import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {
  TextField,
  Card,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import "../../Styles/ForgotPassword.css";
import { setToken } from "../../services/userServices";

const regexvalidatePassword = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
);
const theme = createMuiTheme({
  overrides: {
    MuiTextField: {
      root: {
        height: "15vh",
      },
    },
    MuiInputBase: {
      root: {
        height: "8vh",
      },
    },
  },
});
class resetpassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmPassword: "",
      errorValid: {
        password: false,
        confirmPassword: false,
      },
      errors: {
        password: "",
        confirmPassword: "",
      },
    };
  }
  handlePasswordInput = (event) => {
    this.setState({
      password: event.target.value,
    });
    if (!regexvalidatePassword.test(this.state.password)) {
      this.setState({
        errors: {
          password: "invalid password",
        },
        errorValid: {
          password: true,
        },
      });
    } else {
      this.setState({
        errors: {
          password: "",
        },
        errorValid: {
          password: false,
        },
      });
    }
  };
  handleConfirmPasswordInput = (event) => {
    this.setState({
      confirmPassword: event.target.value,
    });
    if (!regexvalidatePassword.test(this.state.confirmPassword)) {
      this.setState({
        errors: {
          confirmPassword: "invalid password",
        },
        errorValid: {
          confirmPassword: true,
        },
      });
    } else {
      this.setState({
        errors: {
          confirmPassword: "",
        },
        errorValid: {
          confirmPassword: false,
        },
      });
    }
  };
  handleSubmit = (event) => {
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        errors: {
          confirmPassword: "Password not matching",
        },
        errorValid: {
          confirmPassword: true,
        },
      });
    }
    if (this.state.password === "" && this.state.confirmPassword === "") {
      this.setState({
        errors: {
          password: "password not be empty",
          confirmPassword: "confirm Password not be empty",
        },
        errorValid: {
          password: true,
          confirmPassword: true,
        },
      });
    }
    if (
      this.state.password !== "" &&
      this.state.confirmPassword !== "" &&
      this.validateForm() && this.state.password ===  this.state.confirmPassword
    ) {
      localStorage.setItem('tokenId',this.props.match.params.token)
      let passwordData={
        "password":this.state.password
      }
      setToken(passwordData);
      this.props.history.push("/login");
    }
  };
  validateForm() {
    let valid = true;
    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="newPasswordContainer">
          <Card id="newPasswordCard">
            <div className="newPasswordInnerCard">
              <div className="newPasswordInput">
                <div className="passwordParagraph"> Enter a new password</div>
                <TextField
                  className="textFields"
                  id="emailField"
                  label="Password"
                  type="password"
                  placeholder="Password"
                  variant="outlined"
                  value={this.state.password}
                  error={this.state.errorValid.password}
                  onChange={this.handlePasswordInput}
                  helperText={this.state.errors.password}
                />
                <TextField
                  className="textFields"
                  id="emailField"
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm Password"
                  variant="outlined"
                  value={this.state.confirmPassword}
                  error={this.state.errorValid.confirmPassword}
                  onChange={this.handleConfirmPasswordInput}
                  helperText={this.state.errors.confirmPassword}
                />

                <Button onClick={this.handleSubmit} className="submitButton">
                  submit
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default resetpassword;
