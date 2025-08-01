import { Link } from "react-router";
import DeleteNote from "../../containers/DeleteNote/DeleteNote";
import style from "./NotesCard.module.scss";

const NotesCard = ({
  deleteNote,
  categoryColors,
  notesFiltered,
  notes,
  setNotes,
}) => {
  return (
    <>
      {notesFiltered.length > 0 ? (
        notesFiltered.map((note) => (
          <div key={note._id} className={style["card"]}>
            <div className={style["card_picture_container"]}>
              <img src={note.picture || null} alt={note.title} />
            </div>

            <section className={style["card_second_section"]}>
              <div className={style["card_content"]}>
                <div className={style["card_content_title"]}>
                  <h3>{note.title}</h3>
                </div>
                <section className={style["card_content_section"]}>
                  <div
                    style={{
                      background: `${categoryColors[note.category]}`,
                      width: "auto",
                      padding: "0 3px 0 3px",
                      height: "15px",
                      borderRadius: "1em",
                      marginTop: "1ch",
                      marginLeft: "1ch",
                    }}
                  >
                    <p>{note.category} </p>
                  </div>
                  <DeleteNote
                    id={note._id}
                    deleteNote={deleteNote}
                    notes={notes}
                    setNotes={setNotes}
                  />
                </section>
              </div>
              <div className={style["card_container_content_description"]}>
                <p className={style["card_content_description"]}>
                  {note.description}
                </p>
              </div>

              <div className={style["card_content_link"]}>
                <a href={note.link} target="_blank">
                  <p>Source </p>
                </a>

                <Link
                  to={`/notes/${note._id}`}
                  className={style["card_see_more"]}
                >
                  Voir la note
                </Link>
              </div>
            </section>
          </div>
        ))
      ) : (
        <p className={style["spinner_message"]}>Loading...</p>
      )}
    </>
  );
};

export default NotesCard;
