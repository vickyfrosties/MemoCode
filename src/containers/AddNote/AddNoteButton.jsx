import { Link } from "react-router";
import style from "./AddNoteButton.module.scss";
import SelectFilter from "../SelectFilter/SelectFilter";

//* Open the "New note form" when clicked
const AddNoteButton = ({ notes, setFormData }) => {
  return (
    <>
      <section className={style["container"]}>
        <SelectFilter notes={notes} setFormData={setFormData} />

        <div className={style["container_button_form"]}>
          <Link to="/form">
            <button className={style["container_button"]} autoFocus>
              + Add note
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AddNoteButton;
