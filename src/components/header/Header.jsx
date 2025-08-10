import React from "react";

import "./style.css";

function Header() {
  return (
    <header className="header">
      {/* logo */}
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/003/529/153/non_2x/business-to-do-list-flat-icon-modern-style-vector.jpg"
          alt="logo"
          className="logo"
        />
      </div>
      {/* menu */}
      <div>
        <ul className="menu">
          <li className="home_menu">Home</li>
          <li>Blogs</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
