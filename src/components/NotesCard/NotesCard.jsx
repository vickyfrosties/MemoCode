import DeleteNote from "../../containers/DeleteNote/DeleteNote";
import style from "./NotesCard.module.scss";

const NotesCard = ({ newNote, onDeleteHandle, categoryColors }) => {
  return (
    <>
      {newNote.map((note) => (
        <div key={note.id} className={style["card"]}>
          <div className={style["card_picture_container"]}>
            <img src={note.picture || null} alt={note.title} />
          </div>

          <div className={style["card_content"]}>
            <div className={style["card_content_title"]}>
              <h3>{note.title} </h3>
            </div>
            <div>
              <div
                style={{
                  background: `${categoryColors[note.category]}`,
                  width: "30px",
                  height: "15px",
                  borderRadius: "1em",
                  marginTop: "1ch",
                  marginLeft: "1ch",
                }}
              ></div>
            </div>
            <DeleteNote onDeleteHandle={onDeleteHandle} id={note.id} />
            <p className={style["card_content_description"]}>
              {note.description}
            </p>

            <div className={style["card_content_link"]}>
              <p>Source:</p>
              <a href={note.link} target="_blank">
                <p>Visit link</p>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NotesCard;
