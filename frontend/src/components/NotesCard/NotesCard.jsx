import { Link } from "react-router";
import DeleteNote from "../../containers/DeleteNote/DeleteNote";
import style from "./NotesCard.module.scss";
import EditNote from "../../containers/EditNote/EditNote";
import Loader from "../Loader/Loader";

const NotesCard = ({
  deleteNote,
  categoryColors,
  notesFiltered,
  notes,
  word,
  highlightWord,
}) => {
  return (
    <>
      {notes.length === 0 ? (
        <div className={style["spinner_message"]}>
          <Loader />
        </div>
      ) : notesFiltered.length === 0 ? (
        <p className={style["spinner_message"]}>
          There are no memo in this category.
        </p>
      ) : (
        notesFiltered.map((note) => (
          <div key={note._id} className={style["card"]}>
            <div className={style["card_picture_container"]}>
              <img src={note.picture || null} alt={note.title} />
            </div>

            <section className={style["card_second_section"]}>
              <div className={style["card_content"]}>
                <div className={style["card_content_title"]}>
                  <h3>{highlightWord(note.title, word)}</h3>
                </div>
                <section className={style["card_content_section"]}>
                  <div
                    style={{
                      background: `${categoryColors[note.category]}`,
                      width: "auto",
                      color: "white",
                      padding: "0 7px 0 5px",
                      margin: "0 0 0 7px",
                      height: "15px",
                      borderRadius: "1em",
                    }}
                  >
                    <p>{note.category}</p>
                  </div>
                  <DeleteNote id={note._id} deleteNote={deleteNote} />
                  <EditNote id={note._id} />
                </section>
              </div>
              <div className={style["card_container_content_description"]}>
                <p className={style["card_content_description"]}>
                  {highlightWord(
                    note.description.substring(0, 250) + "...",
                    word
                  )}
                </p>
              </div>

              <div className={style["card_content_link"]}>
                <a href={note.link} target="_blank">
                  <p>Source</p>
                </a>

                <Link
                  to={`/notes/${note._id}`}
                  className={style["card_see_more"]}
                >
                  <p>See more</p>
                </Link>
              </div>
            </section>
          </div>
        ))
      )}
    </>
  );
};

export default NotesCard;
