import { useEffect, useState } from "react";
import NotesCard from "../NotesCard/NotesCard";
import style from "./NotesLayout.module.scss";
import AddNoteButton from "../../containers/AddNote/AddNoteButton";

// * Display the notes
const NotesLayout = ({
  onDeleteHandle,
  categoryColors,
  setSelectedCategory,
  selectedCategory,
  word,
  setWord,
}) => {
  const [myNotes, setMyNotes] = useState([]);

  const notesFiltered = myNotes.filter((note) => {
    const filterSelect =
      !selectedCategory ||
      selectedCategory === "all" ||
      note.category === selectedCategory;

    const matchWord =
      note.title.toLowerCase().includes(word.toLowerCase()) ||
      note.description.toLowerCase().includes(word.toLowerCase());

    return filterSelect && matchWord;
  });

  useEffect(() => {
    fetch("http://localhost:8000/notes", {
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
        setMyNotes(data.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return (
    <>
      <h2 className={style["notes-container-title"]}>My memos</h2>
      <AddNoteButton
        setSelectedCategory={setSelectedCategory}
        word={word}
        setWord={setWord}
      />

      <section className={style["notes-container"]}>
        <NotesCard
          notesFiltered={notesFiltered}
          onDeleteHandle={onDeleteHandle}
          categoryColors={categoryColors}
          // notesFetch={myNotes}
        />
      </section>
    </>
  );
};

export default NotesLayout;
