import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>JSON Product Loader</h1>
        <span>by Lucas Berra</span>
      </Link>
    </header>
  );
};

export default Header;
