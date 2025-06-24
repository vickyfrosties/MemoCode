import style from "./AddNoteButton.module.scss";

//* Open the "New note form" when clicked
const AddNoteButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("click");
  };

  return (
    <>
      <div className={style["button-container"]}>
        <button className={style["button"]} autoFocus onClick={handleClick}>
          + Add note
        </button>
      </div>
    </>
  );
};

export default AddNoteButton;
