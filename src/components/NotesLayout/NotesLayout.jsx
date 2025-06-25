import style from "./NotesLayout.module.scss";

// * Display the notes
const NotesLayout = ({ newNote }) => {
  return (
    <>
      <section className={style["notes-container"]}>
        {newNote.map((note, i) => (
          <div key={i}>
            <h3>{note.title} </h3>
            <p>{note.description} </p>
            <img src={note.picture} alt={note.title} />
            <a href={note.link}>Source</a>
          </div>
        ))}
      </section>
    </>
  );
};

export default NotesLayout;
