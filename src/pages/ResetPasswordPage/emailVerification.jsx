import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {
  TextField,
  Card,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import "../../Styles/EmailVerification.css";

import { resetPassword, setToken } from "../../services/userServices";

const regexValidateEmail = new RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
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
class EmailVerification extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errorValid: {
        email: false,
      },
      errors: {
        email: "",
      },
    };
  }
  handleEmailInput = (event) => {
    this.setState({
      email: event.target.value,
    });
    if (!regexValidateEmail.test(this.state.email)) {
      this.setState({
        errors: {
          email: "invalid email id",
        },
        errorValid: {
          email: true,
        },
      });
    } else {
      this.setState({
        errors: {
          email: "",
        },
        errorValid: {
          email: false,
        },
      });
    }
  };
  handleSubmit = (event) => {
    if (this.state.email === "") {
      this.setState({
        errors: {
          email: "email is not empty",
        },
        errorValid: {
          email: true,
        },
      });
    }
    if (this.state.email !== "" && this.validateForm()) {
      let emailData = {
        email: this.state.email,
      };
      resetPassword(emailData).then((response) => {
        let resetPassToken=response.data;
        console.log(resetPassToken)
        localStorage.setItem('resetPassToken',resetPassToken);
      });
      setToken();
      this.props.history.push("/resetpassword");
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
        <div className="loginContainer">
          <Card id="Card">
            <div className="innerCard">
              <div className="input">
                <div className="paragraph"> Enter a email address</div>
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
export default withRouter(EmailVerification);
