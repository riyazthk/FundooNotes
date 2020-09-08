import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Card, TextField } from "@material-ui/core";
import "../Styles/Register.css";
import { signUp } from "../services/userServices";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";
const regexValidateEmail = new RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$$/
);
const regexvalidatePassword = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
);
const regexvalidateName = new RegExp(/^[A-Z]{1}[a-z]{3,}$/);

class register extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      errorValid: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
      },
      enable: true,
      service: "advance",
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  }
  handleFirstNameInput = (event) => {
    event.preventDefault();
    this.setState({
      firstName: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    if (!regexvalidateName.test(this.state.firstName)) {
      errors.firstName = "firstName is not valid";
      validate = true;
    } else {
      errors.firstName = "";
    }
    this.setState({
      errorValid: { firstName: validate },
      errors: { firstName: errors.firstName },
    });
  };
  handleLastNameInput = (event) => {
    event.preventDefault();
    this.setState({
      lastName: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    if (!regexvalidateName.test(event.target.value)) {
      errors.lastName = "lastName is not valid";
      validate = true;
    } else {
      errors.lastName = "";
    }
    this.setState({
      errorValid: { lastName: validate },
      errors: { lastName: errors.lastName },
    });
  };

  handleEmailInput = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    if (!regexValidateEmail.test(event.target.value)) {
      errors.email = "email is not valid";
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
    event.preventDefault();
    this.setState({
      password: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    if (!regexvalidatePassword.test(event.target.value)) {
      errors.password =
        "password is not valid";
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
    if (
      this.state.email === "" &&
      this.state.password === "" &&
      this.state.firstName === "" &&
      this.state.lastName === ""
    ) {
      this.setState({
        errorValid: {
          email: true,
          password: true,
          firstName: true,
          lastName: true,
        },
        errors: {
          email: "email not be empty",
          password:
            "password not be empty",
          firstName: "firstname not be empty",
          lastName: "lastname not be empty",
        },
      });
    }

    if (this.validateForm() && this.state.email!=="" && this.state.password!==""&&this.state.lastName!=="" && this.state.firstName!=="") {
      console.log("valid form");
      let signUpData = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        service: this.state.service,
        email: this.state.email,
        password: this.state.password,
      };
      signUp(signUpData).then((response) => {
        console.log(response);
      });
      this.props.history.push("/login");

      // this.setState({
      //   email: "",
      //   firstName: "",
      //   lastName: "",
      //   password: "",
      // });
    } else {
      console.log("invalid form");
    }
    
  };

  validateForm() {
    let valids = true;
    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (valids = false)
    );
    return valids;
  }

  render() {
    return (
      <div className="loginContainer">
        <Card id="signupCard">
          <div className="innerCard">
            <div className="registerInputDiv">
              <TextField
                className="textField"
                id="outlined-required"
                label="First Name"
                type="text"
                placeholder="firstName"
                variant="outlined"
                value={this.state.firstName}
                error={this.state.errorValid.firstName}
                onChange={this.handleFirstNameInput}
                helperText={this.state.errors["firstName"]}
              />
              <TextField
                className="textField"
                id="outlined-required"
                label="Last Name"
                type="text"
                placeholder="lastName"
                variant="outlined"
                value={this.state.lastName}
                error={this.state.errorValid.lastName}
                onChange={this.handleLastNameInput}
                helperText={this.state.errors["lastName"]}
              />

              <TextField
                className="textField"
                id="outlined-required"
                label="Email id"
                type="text"
                placeholder="email id"
                variant="outlined"
                value={this.state.email}
                error={this.state.errorValid.email}
                onChange={this.handleEmailInput}
                helperText={this.state.errors["email"]}
              />

              <TextField
                className="textField"
                label="Password"
                type="password"
                placeholder="password"
                variant="outlined"
                value={this.state.password}
                error={this.state.errorValid.password}
                onChange={this.handlePasswordInput}
                helperText={this.state.errors["password"]}
              />
              <Button onClick={this.handleSubmit}>submit</Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
export default withRouter(register);
