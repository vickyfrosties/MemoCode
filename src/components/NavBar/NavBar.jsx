import style from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <>
      <nav className={style["navigation"]}>
        <h1>MemoCode</h1>
      </nav>
    </>
  );
};

export default NavBar;
