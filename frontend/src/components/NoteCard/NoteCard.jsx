import { useEffect, useState } from "react";
import { useParams } from "react-router";
import style from "../NotesCard/NotesCard.module.scss";

const NoteCard = () => {
  const { id } = useParams();
  const [memo, setMemo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/notes/${id}`, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response.json();
      })
      .then((data) => {
        setMemo(data.data);
      })

      .catch((error) => {
        console.log("Erreur de la requête :id", error);
      });
  }, []);

  return (
    <>
      {memo.length > 0 ? (
        memo.map((m) => (
          <div key={m._id} className={style["card"]}>
            <div className={style["card_picture_container"]}>
              <img src={m.picture || null} alt={m.title} />
            </div>

            <section className={style["card_second_section"]}>
              <div className={style["card_content"]}>
                <div className={style["card_content_title"]}>
                  <h3>{m.title}</h3>
                </div>
                <section className={style["card_content_section"]}>
                  <div
                    style={{
                      //   background: `${categoryColors[note.category]}`,
                      background: "red",
                      width: "auto",
                      padding: "0 3px 0 3px",
                      height: "15px",
                      borderRadius: "1em",
                      marginTop: "1ch",
                      marginLeft: "1ch",
                    }}
                  >
                    <p>{m.category} </p>
                  </div>
                </section>
              </div>
              <div className={style["card_container_content_description"]}>
                <p className={style["card_content_description"]}>
                  {m.description}
                </p>
              </div>

              <div className={style["card_content_link"]}>
                <p>Source:</p>
                <a href={m.link} target="_blank">
                  <p>Visit link</p>
                </a>
              </div>
            </section>
          </div>
        ))
      ) : (
        <p className={style["spinner_message"]}>Loading memo...</p>
      )}
    </>
  );
};

export default NoteCard;
