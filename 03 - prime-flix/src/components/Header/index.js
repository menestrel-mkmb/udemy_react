import { Link } from "react-router-dom";

import "./header.css";

function Header() {
  return (
    <header className="header__sect flex parent_row">
      <span className="logo__span logo home">Prime flix</span>
      <nav className="header__nav flex parent_row">
        <Link className="menu__link link" to="/">
          Home
        </Link>
        <Link className="menu__link link" to="/mylist">
          MyList
        </Link>
        <Link className="menu__link link" to="/movie">
          Movie
        </Link>
      </nav>
    </header>
  );
}

export default Header;
