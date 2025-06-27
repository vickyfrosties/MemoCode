import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import NotesLayout from "./components/NotesLayout/NotesLayout";
import NoteForm from "./containers/NoteForm/NoteForm";
import AddNoteButton from "./containers/AddNote/AddNoteButton";
import { nanoid } from "nanoid";
import { Route, Routes } from "react-router";
import { useNavigate } from "react-router";
import Footer from "./components/Footer/Footer";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    picture: "",
    link: "",
  });

  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  // * Create data form array from data form updated
  // ! Attention, utiliser le ... "spread operator" pour ne pas perdre le tableau original. Push renvoie un number et écrase le tableau de base.
  // setNotes(notes.push(data.title, data.description, data.picture, data.link));

  const handleNewNote = () => {
    // * C'est ici que se génère le tableau avec les nouvelles données en reprenant l'objet de base formData
    const id = nanoid();

    const newNoteId = { id, ...formData };
    setNotes([...notes, newNoteId]);
    navigate("/");
  };

  const deleteNote = (idToDelete) => {
    const noteToDelete = notes.filter((note) => note.id !== idToDelete);

    setNotes(noteToDelete);
  };

  return (
    <>
      <section className="main-container">
        <NavBar />
        <AddNoteButton />

        <Routes>
          <Route
            path="/"
            element={
              <NotesLayout newNote={notes} onDeleteHandle={deleteNote} />
            }
          />

          <Route
            path="/form"
            element={
              <NoteForm
                data={formData}
                setFormData={setFormData}
                onSubmitHandle={handleNewNote}
              />
            }
          />
        </Routes>
      </section>

      <Footer />
    </>
  );
}

export default App;
