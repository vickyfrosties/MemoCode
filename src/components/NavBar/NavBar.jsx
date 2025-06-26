import { Link } from "react-router";
import style from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <>
      <nav className={style["navigation"]}>
        <Link to="/">
          <h1>MemoCode</h1>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
