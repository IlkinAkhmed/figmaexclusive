import React, { useState } from "react";
import "./index.scss";
import { NavLink, useNavigate } from "react-router-dom";
import MobileNav from "../../Components/MobileNav";

function Navbar() {
  const navigate = useNavigate();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <>
      <nav>
        <div className="nav-inner">
          <div className="logo">
            <h1>Exclusive</h1>
          </div>
          <ul>
            <li>
              <NavLink className={"navlink"} to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"navlink"}

                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"navlink"}

                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"navlink"}

                to={"/sign-up"}
              >
                Sign-up
              </NavLink>
            </li>
          </ul>
          <div className="search-side">
            <div className="search">
              <input
                className="desktopSearch"
                type="text"
                placeholder="What are you looking for?"
              />
              <input
                className={`mobileSearch ${isSearchOpen ? "search-active" : ""
                  }`}
                type="text"
                placeholder="What are you looking for?"
              />
              <i className="first fa-solid fa-magnifying-glass"></i>
              <i
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`second fa-solid ${isSearchOpen ? "fa-xmark" : "fa-magnifying-glass"
                  }`}
              ></i>
            </div>
            <div className="shopping-logos">
              <i
                onClick={() => navigate("/wishlist")}
                className="fa-regular fa-heart"
              ></i>
              <i
                onClick={() => navigate("/basket")}
                to={"/wishlist"}
                className="fa-solid fa-cart-shopping"
              ></i>
              <i onClick={() => setIsNavOpen(!isNavOpen)} className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
      <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </>
  );
}

export default Navbar;
