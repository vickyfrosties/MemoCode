import style from "./DeleteNote.module.scss";

const DeleteNote = ({ id, deleteNote }) => {
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/notes/${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("An error occurred while trying delete request");
      }

      const data = await response.json();

      deleteNote(id);
    } catch (error) {
      console.error("Error after request attempt :", error);
    }
  };

  return (
    <>
      <div className={style["button-container"]}>
        <button onClick={handleClick}>
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
