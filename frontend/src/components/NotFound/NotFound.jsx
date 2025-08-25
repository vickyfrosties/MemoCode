import style from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <>
      <h3 className={style["title-error"]}>404 - Page not found.</h3>
    </>
  );
};

export default NotFound;
