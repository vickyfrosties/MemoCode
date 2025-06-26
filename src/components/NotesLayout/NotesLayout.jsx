import NotesCard from "../NotesCard/NotesCard";
import style from "./NotesLayout.module.scss";

// * Display the notes
const NotesLayout = ({ newNote, onDeleteHandle }) => {
  return (
    <>
      <h2 className={style["notes-container-title"]}>My memos</h2>
      <section className={style["notes-container"]}>
        <NotesCard newNote={newNote} onDeleteHandle={onDeleteHandle} />
      </section>
    </>
  );
};

export default NotesLayout;
