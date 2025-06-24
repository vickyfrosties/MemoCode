import AddNoteButton from "../../containers/AddNote/AddNoteButton";
import style from "./NotesLayout.module.scss";

//* Display the notes
const NotesLayout = () => {
  return (
    <>
      <AddNoteButton />
      <section className={style["notes-container"]}>
        <p>No current memo (✖╭╮✖)</p>
      </section>
    </>
  );
};

export default NotesLayout;
