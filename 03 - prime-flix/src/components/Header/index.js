import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/mylist">MyList</Link>
        <Link to="/movie">Movie</Link>
      </nav>
    </header>
  );
}

export default Header;
