import style from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <>
      <h3 className={style["title-error"]}>404 - Error page not found.</h3>
    </>
  );
};

export default NotFound;
