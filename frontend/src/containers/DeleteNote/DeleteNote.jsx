import style from "./DeleteNote.module.scss";

const DeleteNote = ({ onDeleteHandle, id }) => {
  return (
    <>
      <div className={style["button-container"]}>
        <button onClick={() => onDeleteHandle(id)}>
          <img
            className={style["button-container-img"]}
            src="/assets/trash.svg"
            alt="Delete note button"
          />
        </button>
      </div>
    </>
  );
};

export default DeleteNote;
