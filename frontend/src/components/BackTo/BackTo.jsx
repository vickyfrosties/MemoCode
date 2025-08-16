import { useNavigate } from "react-router";
import style from "./BackTo.module.scss";

const BackTo = ({ setFormData }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    navigate("/notes");
    setFormData({
      title: "",
      description: "",
      picture: "",
      link: "",
      category: "",
    });
  };
  return (
    <>
      <div className={style["arrow-container"]} onClick={handleClick}>
        <div className={style["arrow-container-svg-container"]}>
          <img src="/assets/arrow-left.svg" alt="Back to home page" />
        </div>
        <div className={style["arrow-container-description-container"]}>
          <p>Go back to home page</p>
        </div>
      </div>
    </>
  );
};

export default BackTo;
