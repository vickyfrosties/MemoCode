import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={style["footer"]}>
        <p>MemoCode</p>
        <p>© All rights reserved - {new Date().getFullYear()} Sounia Mhalla.</p>
      </footer>
    </>
  );
};

export default Footer;
