import React, { Component } from "react";
import axios from "axios";
import "../../styles/login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  login = (evt) => {
    if (!this.state.username || !this.state.password) {
      alert("Enter the values");
    }else{
        const user = "team16";
        console.log("inside the login: " + user);
        window.open("http://localhost:3000/home", "_self");
        console.log("login successful !!");
    }

    
    // evt.preventDefault()
    // const user = this.state

    // axios.post(`${process.env.REACT_APP_API_URL}/login`, user)
    //     .then((response) => {
    //         //console.log(response)
    //         if (!response.data.success) {
    //             alert('Invalid Email or Password !!')
    //             this.resetState()
    //         }
    //         else {
    //             localStorage.setItem('user', response.config.data)
    //             console.log(response.config.data)
    //             console.log("login successful !!")
    //             this.resetState()
    //             window.location.href = "/home"
    //         }

    //     })
    //     .catch((error) => {
    //         console.log("Internal Server Error !!")
    //         window.alert('Internal Server Error!!')
    //         this.resetState()
    //     })
  };

  resetState = () => {
    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    var loggedin = JSON.parse(localStorage.getItem("user"));
    if (loggedin) {
      window.location.href = "/home";
    }

    return (
      <div>
        <form className="form">
        <img src={require("../../pictures/db.png")}
              className="Logo"
              alt="profile"
            />
          <div className="form-label">
            Login
          </div>
          <br />
          <input
            className="form-input"
            type="text"
            placeholder="Username"
            value={this.state.email}
            onChange={(evt) => {
              this.setState({ username: evt.target.value });
            }}
          />{" "}
          <br /> <br />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(evt) => {
              this.setState({ password: evt.target.value });
            }}
          />{" "}
          <br /> <br />
          <div className="button_center">
            <button
              type="button"
              className="button"
              onClick={(evt) => this.login(evt)}
            >
              {" "}
              Login{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;