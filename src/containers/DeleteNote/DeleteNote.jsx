import style from "./DeleteNote.module.scss";

const DeleteNote = ({ onDeleteHandle }) => {
  return (
    <>
      <div className={style["button-container"]}>
        <button onClick={onDeleteHandle}>
          <img
            className={style["button-container-img"]}
            src="../../../public/assets/trash.svg"
            alt="Delete note"
          />
        </button>
      </div>
    </>
  );
};

export default DeleteNote;
