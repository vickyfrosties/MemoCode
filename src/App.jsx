import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import NotesLayout from "./components/NotesLayout/NotesLayout";
import NoteForm from "./containers/NoteForm/NoteForm";
import AddNoteButton from "./containers/AddNote/AddNoteButton";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    picture: "",
    link: "",
  });

  const [notes, setNotes] = useState([]);

  const addForm = (e) => {
    e.preventDefault();
    console.log("formulaire ouvert");
  };

  // * Create data form array from data form updated
  // ! Attention, utiliser le ... "spread operator" pour ne pas perdre le tableau original. Push renvoie un number et écrase le tableau de base.
  // setNotes(notes.push(data.title, data.description, data.picture, data.link));

  const handleNewNote = () => {
    // * C'est ici que se génère le tableau avec les nouvelles données en reprenant l'objet de base formData
    setNotes([...notes, formData]);
  };

  const deleteNote = () => {
    setNotes([]);
  };

  return (
    <>
      <NavBar />
      <AddNoteButton onAction={addForm} />
      <NotesLayout newNote={notes} onDeleteHandle={deleteNote} />
      <NoteForm
        data={formData}
        setFormData={setFormData}
        onSubmitHandle={handleNewNote}
      />
    </>
  );
}

export default App;
