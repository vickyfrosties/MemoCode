import { useEffect } from "react";
import NotesCard from "../NotesCard/NotesCard";
import style from "./NotesLayout.module.scss";

// * Display the notes
const NotesLayout = ({ onDeleteHandle, categoryColors, visibleNotes }) => {
  useEffect(() => {
    fetch("http://localhost:8000/", {
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
        const resultPromise = response.json();
        return resultPromise;
      })

      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Erreur de la requête:", error);
      });
  }, []);

  return (
    <>
      <h2 className={style["notes-container-title"]}>My memos</h2>
      <section className={style["notes-container"]}>
        {visibleNotes.length > 0 ? (
          <NotesCard
            visibleNotes={visibleNotes}
            onDeleteHandle={onDeleteHandle}
            categoryColors={categoryColors}
          />
        ) : (
          <div className={style["notes-container-void"]}>
            <p>No current memo (✖╭╮✖)</p>
          </div>
        )}
      </section>
    </>
  );
};

export default NotesLayout;
