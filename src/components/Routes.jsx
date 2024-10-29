import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

function NavRoute() {
  const [activeMenu, setActiveMenu] = useState("Categories");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Trigger the search functionality
      console.log("Search initiated for:", searchTerm);
      // You can call your search function here, e.g.:
      // performSearch(searchTerm);
    }
  };

  function close(menu) {
    setMenuOpen(false);
    setActiveMenu(menu); // Set the active menu item when clicked
  }

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }
  return (
    <div className="nav-page">
      <nav className="nav-bar">
        <NavLink to="/" end>
          <h1>
            <img src={Logo} alt="" />
          </h1>
        </NavLink>
        <input
          type="checkbox"
          id="check"
          checked={isMenuOpen}
          onChange={toggleMenu}
        />
        <ul className={`menu ${isMenuOpen ? "open" : "closed"}`}>
          <a
            className={activeMenu === "Categories" ? "active" : ""}
            onClick={() => close("Categories")}
            href="#"
          >
            Home
          </a>
          <a
            className={activeMenu === "Collections" ? "active" : ""}
            onClick={() => close("Collections")}
            href="#"
          >
            Learn
          </a>
          <a
            className={activeMenu === "Store" ? "active" : ""}
            onClick={() => close("Store")}
            href="a"
          >
            Help
          </a>
          <a
            className={activeMenu === "Store" ? "active" : ""}
            onClick={() => close("Store")}
            href="a"
          >
            Blog
          </a>
          <a
            className={activeMenu === "Store" ? "active" : ""}
            onClick={() => close("Store")}
            href="a"
          >
            About
          </a>
          <a
            id="login-mob"
            className={activeMenu === "Login" ? "active" : ""}
            onClick={() => close("Login")}
            href="#"
          >
            Login
          </a>
          <label htmlFor="check" className="close-menu">
            <ion-icon name="close-outline" color="white"></ion-icon>
          </label>
        </ul>

        <label htmlFor="check" className="open-menu">
          <ion-icon name="menu-outline" color="dark"></ion-icon>
        </label>
        <ul className="specials">
          <input
            id="search"
            type="text"
            value={searchTerm}
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <li id="login-desk">
            <a href="#">
              <span id="login">Sign In</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavRoute;
