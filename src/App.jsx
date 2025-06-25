import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import NotesLayout from "./components/NotesLayout/NotesLayout";
import NoteForm from "./containers/NoteForm/NoteForm";
import AddNoteButton from "./containers/AddNote/AddNoteButton";

function App() {
  const addForm = (e) => {
    e.preventDefault();
    console.log("formulaire ouvert");
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    picture: "",
    link: "",
  });

  return (
    <>
      <NavBar />
      <AddNoteButton onAction={addForm} />
      <NotesLayout />
      <NoteForm data={formData} setFormData={setFormData} />
    </>
  );
}

export default App;
