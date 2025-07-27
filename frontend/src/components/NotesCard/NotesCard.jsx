import DeleteNote from "../../containers/DeleteNote/DeleteNote";
import style from "./NotesCard.module.scss";

const NotesCard = ({
  onDeleteHandle,
  categoryColors,
  visibleNotes,
  notesFetch,
}) => {
  if (!notesFetch || notesFetch.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {notesFetch.length > 0 ? (
        notesFetch.map((note) => (
          <div key={note._id} className={style["card"]}>
            <div className={style["card_picture_container"]}>
              <img src={note.picture || null} alt={note.title} />
            </div>

            <div className={style["card_content"]}>
              <div className={style["card_content_title"]}>
                <h3>{note.title}</h3>
              </div>
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
            <DeleteNote onDeleteHandle={onDeleteHandle} id={note._id} />
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
        ))
      ) : (
        <p>Chargement des notes...</p>
      )}
    </>
  );
};

export default NotesCard;
