import NotesCard from "../NotesCard/NotesCard";
import style from "./NotesLayout.module.scss";

// * Display the notes
const NotesLayout = ({ onDeleteHandle, categoryColors, visibleNotes }) => {
  return (
    <>
      <h2 className={style["notes-container-title"]}>My memos</h2>
      <section className={style["notes-container"]}>
        {visibleNotes.length > 0 ? (
          <NotesCard
            visibleNotes={visibleNotes}
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
