import NotesCard from "../NotesCard/NotesCard";
import style from "./NotesLayout.module.scss";

// * Display the notes
const NotesLayout = ({ newNote, onDeleteHandle, categoryColors }) => {
  return (
    <>
      <h2 className={style["notes-container-title"]}>My memos</h2>
      <section className={style["notes-container"]}>
        {newNote.length > 0 ? (
          <NotesCard
            newNote={newNote}
            onDeleteHandle={onDeleteHandle}
            categoryColors={categoryColors}
          />
        ) : (
          <div className={style["notes-container-void"]}>
            <p>No current memo (✖╭╮✖)</p>
          </div>
        )}
      </section>
    </>
  );
};

export default NotesLayout;
