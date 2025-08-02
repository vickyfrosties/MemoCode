import style from "./DeleteNote.module.scss";

const DeleteNote = ({ id, deleteNote }) => {
  return (
    <>
      <div className={style["button-container"]}>
        <button onClick={() => deleteNote(id)}>
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
