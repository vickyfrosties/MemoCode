import { useEffect } from "react";
import NotesCard from "../NotesCard/NotesCard";
import style from "./NotesLayout.module.scss";
import AddNoteButton from "../../containers/AddNote/AddNoteButton";

// * Display the notes
const NotesLayout = ({
  deleteNote,
  categoryColors,
  setSelectedCategory,
  selectedCategory,
  word,
  setWord,
  notes,
  setNotes,
}) => {
  const notesFiltered = notes.filter((note) => {
    const filterSelect =
      !selectedCategory ||
      selectedCategory === "all" ||
      note.category === selectedCategory;

    const matchWord =
      note.title.toLowerCase().includes(word.toLowerCase()) ||
      note.description.toLowerCase().includes(word.toLowerCase());

    return filterSelect && matchWord;
  });

  const API_URL = import.meta.env("API_URL") || "http://localhost:8000";

  const handleDelete = async (id) => {
    await deleteNote(id);
    //* Update the state and display notes without note which matches id deleted
    setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
  };

  useEffect(() => {
    fetch(`${API_URL}/notes`, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Notes couldn't be fetched.");
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

  return (
    <>
      <h2 className={style["notes-container-title"]}>My memos</h2>
      <AddNoteButton
        setSelectedCategory={setSelectedCategory}
        word={word}
        selectedCategory={selectedCategory}
        setWord={setWord}
      />

      <section className={style["notes-container-container"]}>
        <section className={style["notes-container"]}>
          <NotesCard
            notesFiltered={notesFiltered}
            notes={notes}
            deleteNote={handleDelete}
            categoryColors={categoryColors}
          />
        </section>
      </section>
    </>
  );
};

export default NotesLayout;
