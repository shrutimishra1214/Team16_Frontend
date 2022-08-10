import React from "react";
import Header from "../Navbar";
import "../../styles/login.css";

export default function Profile() {
  const logout = () => {
    const user = "team16";
    localStorage.clear();
    console.log("inside the profile: " + user);
    window.open("http://localhost:3000", "_self");
    console.log("logout successful !!");
  };

  return (
    <div>
      <Header />
      <div className="button_right">
        <button
          type="button"
          className="logoutbutton"
          onClick={logout}
        >
          {" "}
          Logout{" "}
        </button>
      </div>
      <br />
      <div className="profile">
        <div className="profile-detail">Id: 102794</div>
        <div className="profile-detail">Name: Mahesh Thakur</div>
        <div className="profile-detail">Email: mahesh.thakur@db.com</div>
        <div className="profile-detail">Role: Associate Engineer</div>
      </div>
    </div>
  );
}