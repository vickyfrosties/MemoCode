import { Link } from "react-router";
import style from "./AddNoteButton.module.scss";

//* Open the "New note form" when clicked
const AddNoteButton = () => {
  return (
    <>
      <div className={style["container"]}>
        <Link to="/form">
          <button className={style["container_button"]} autoFocus>
            + Add note
          </button>
        </Link>
      </div>
    </>
  );
};

export default AddNoteButton;
