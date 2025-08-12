import { useEffect, useState } from "react";
import { useParams } from "react-router";
import style from "../NoteCard/NoteCard.module.scss";
import DeleteNote from "../../containers/DeleteNote/DeleteNote";
import EditNote from "../../containers/EditNote/EditNote";

const NoteCard = () => {
  const { id } = useParams();
  const [memo, setMemo] = useState([]);

  async function getNoteById(request, response) {
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
  }
  getNoteById();

  return (
    <>
      <section className={style["note-container"]}>
        {memo.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div key={memo._id} className={style["card_container"]}>
            <section className={style["card_info_section"]}>
              <div className={style["card_info_section_content"]}>
                <div>
                  <h3>{memo.title}</h3>
                </div>
                <div className={style["card_first_section_info_category"]}>
                  <p>{memo.category}</p>
                </div>
              </div>
            </section>

            <div className={style["card_container_content_description"]}>
              <p className={style["card_content_description"]}>
                {memo.description}
              </p>
            </div>

            <div className={style["card_container_content_link"]}>
              <p>Sources for this topic:</p>
              <a href={memo.link} target="_blank">
                <p>{memo.link}</p>
              </a>
            </div>

            <div className={style["card_container_content_picture"]}>
              <img src={memo.picture || null} alt={memo.title} />
              <div className={style["card_container_actions"]}>
                <DeleteNote />
                <EditNote id={id} />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default NoteCard;
