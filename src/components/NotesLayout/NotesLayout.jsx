import NotesCard from "../NotesCard/NotesCard";
import style from "./NotesLayout.module.scss";

// * Display the notes
const NotesLayout = ({ newNote }) => {
  return (
    <>
      <h2 className={style["notes-container-title"]}>My memos</h2>
      <section className={style["notes-container"]}>
        <NotesCard newNote={newNote} />
      </section>
    </>
  );
};

export default NotesLayout;
