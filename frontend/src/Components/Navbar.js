import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={require("../pictures/db.png")} className="dbLogo" alt="profile" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                {" "}
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/trades"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {" "}
                Manage Trades{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-links" onClick={closeMobileMenu}>
                {" "}
                Add bonds{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {" "}
                <img
                  src={require("../pictures/profile.png")}
                  className="prof"
                  alt="profile"
                />
              </Link>
            </li>
          </ul>
          {/* <a href="/"> Home </a>
                <a href="/trades">Manage Trade</a>
                <a href="/add">Add Bonds</a>
                <a href="search">Search</a>
                <a href="/profile"> <img src={require("../pictures/profile.png")} className="prof" alt="profile" /> </a> */}
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <img
          src={require("../pictures/threelines.png")}
          className="dbLogo"
          alt="listView"
        />
      </button>
    </header>
  );
}