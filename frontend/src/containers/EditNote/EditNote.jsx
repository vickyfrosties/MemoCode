import { useNavigate } from "react-router";
import style from "../DeleteNote/DeleteNote.module.scss";

const EditNote = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    navigate(`/form/edit/${id}`);
  };
  return (
    <>
      <div className={style["button-container"]}>
        <button onClick={handleClick}>
          <img
            className={style["button-container-img"]}
            src="/assets/edit.svg"
            alt="Edit note button"
          />
        </button>
      </div>
    </>
  );
};

export default EditNote;
