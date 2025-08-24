import { useNavigate } from "react-router";
import style from "./BackTo.module.scss";

const BackTo = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/notes");
  };
  return (
    <>
      <div className={style["arrow-container"]}>
        <div className={style["arrow-container-bis"]}>
          <a
            onClick={handleClick}
            className={style["arrow-container-svg-container"]}
          >
            <img src="/assets/arrow-left.svg" alt="Back to home page" />
          </a>
          <div className={style["arrow-container-description-container"]}>
            <p>Back to homepage</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackTo;
