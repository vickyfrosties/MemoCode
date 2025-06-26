import DeleteNote from "../../containers/DeleteNote/DeleteNote";
import style from "./NotesCard.module.scss";

const NotesCard = ({ newNote, onDeleteHandle }) => {
  console.log(newNote);

  return (
    <>
      {newNote.map((note, i) => (
        <div key={i} className={style["card"]}>
          <div className={style["card_picture_container"]}>
            <img src={note.picture} alt={note.title} />
          </div>

          <div className={style["card_content"]}>
            <div className={style["card_content_title"]}>
              <h3>{note.title} </h3>
            </div>
            <DeleteNote onDeleteHandle={onDeleteHandle} />
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
