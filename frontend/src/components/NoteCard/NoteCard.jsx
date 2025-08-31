import { useEffect } from "react";
import { useParams } from "react-router";
import style from "../NoteCard/NoteCard.module.scss";
import DeleteNote from "../../containers/DeleteNote/DeleteNote";
import EditNote from "../../containers/EditNote/EditNote";
import BackTo from "../BackTo/BackTo";
import Loader from "../Loader/Loader";

const NoteCard = ({ categoryColors, deleteNote, notes, setNotes }) => {
  const { id } = useParams();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

  async function getNoteById() {
    useEffect(() => {
      fetch(`${API_URL}/notes/${id}`, {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Id note ${id} couldn't be fetched.`);
          }
          return response.json();
        })
        .then((data) => {
          setNotes(data.data);
        })

        .catch((error) => {
          console.error("An error occured with the request:", error.message);
        });
    }, []);
  }
  getNoteById();

  return (
    <>
      <BackTo />

      <section className={style["note-container"]}>
        {notes.length === 0 ? (
          <div className={style["spinner_message"]}>
            <Loader />
          </div>
        ) : (
          <div key={notes._id} className={style["card_container"]}>
            <div className={style["card_info_section_content"]}>
              <div>
                <h3>{notes.title}</h3>
              </div>
              <div
                style={{
                  background: `${categoryColors[notes.category]}`,
                  width: "fit-content",
                  padding: "0 7px 0 7px",
                  fontSize: "12px",
                  textAlign: "center",
                  borderRadius: "1em",
                }}
                className={["card_first_section_info_category"]}
              >
                <p>{notes.category}</p>
              </div>
            </div>

            <div className={style["card_container_content_description"]}>
              <p className={style["card_content_description"]}>
                {notes.description}
              </p>
            </div>

            <div className={style["card_container_content_link"]}>
              <p>Sources for this topic:</p>
              <a href={notes.link} target="_blank">
                <p>{notes.link}</p>
              </a>
            </div>

            <div className={style["card_container_content_picture"]}>
              <img src={notes.picture || null} alt={notes.title} />
            </div>
            <div className={style["card_container_actions"]}>
              <DeleteNote deleteNote={deleteNote} id={id} notes={notes} />
              <EditNote id={id} />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default NoteCard;
