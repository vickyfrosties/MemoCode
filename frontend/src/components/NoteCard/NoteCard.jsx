import { useEffect, useState } from "react";
import { useParams } from "react-router";
import style from "../NotesCard/NotesCard.module.scss";
import DeleteNote from "../../containers/DeleteNote/DeleteNote";

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
        console.log("An error occurred:", error);
      });
  }, []);

  return (
    <>
      <section className={style["notes-container"]}>
        {memo.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div key={memo._id} className={style["card"]}>
            <div className={style["card_picture_container"]}>
              <img src={memo.picture || null} alt={memo.title} />
            </div>

            <section className={style["card_second_section"]}>
              <div className={style["card_content"]}>
                <div className={style["card_content_title"]}>
                  <h3>{memo.title}</h3>
                </div>
                <section className={style["card_content_section"]}>
                  <div
                    style={{
                      width: "auto",
                      padding: "0 3px 0 3px",
                      height: "15px",
                      borderRadius: "1em",
                      marginTop: "1ch",
                      marginLeft: "1ch",
                    }}
                  >
                    <p>{memo.category} </p>
                  </div>
                  <DeleteNote />
                </section>
              </div>
              <div className={style["card_container_content_description"]}>
                <p className={style["card_content_description"]}>
                  {memo.description}
                </p>
              </div>

              <div className={style["card_content_link"]}>
                <a href={memo.link} target="_blank">
                  <p>Source &#x1F4CE; </p>
                </a>
              </div>
            </section>
          </div>
        )}
      </section>
    </>
  );
};

export default NoteCard;
