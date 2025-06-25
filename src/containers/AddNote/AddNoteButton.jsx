import style from "./AddNoteButton.module.scss";

//* Open the "New note form" when clicked
const AddNoteButton = ({ onAction }) => {
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log("click");
  // };

  return (
    <>
      <div className={style["container"]}>
        <button
          className={style["container_button"]}
          autoFocus
          onClick={onAction}
        >
          + Add note
        </button>
      </div>
    </>
  );
};

export default AddNoteButton;
