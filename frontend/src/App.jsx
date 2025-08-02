import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import NotesLayout from "./components/NotesLayout/NotesLayout";
import NoteForm from "./containers/NoteForm/NoteForm";
import { nanoid } from "nanoid";
import { Navigate, Route, Routes } from "react-router";
import { useNavigate } from "react-router";
import Footer from "./components/Footer/Footer";
import NoteCard from "./components/NoteCard/NoteCard";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    picture: "",
    link: "",
    category: "",
  });

  const [notes, setNotes] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const [word, setWord] = useState("");

  const categoryColors = {
    programmation: "#2563EB",
    neuropsychology: "#6B21A8",
    astronomy: "#C04278",
    gaming: "#C62828",
  };

  // * Create data form array from data form updated
  // ! Attention, utiliser le ... "spread operator" pour ne pas perdre le tableau original. Push renvoie un number et écrase le tableau de base.
  // setNotes(notes.push(data.title, data.description, data.picture, data.link));

  const deleteNote = async (idToDelete) => {
    try {
      const response = await fetch(
        `http://localhost:8000/notes/${idToDelete}`,
        {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("An error occurred while trying delete request");
      }

      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Error after request attempt :", error);
    }
  };

  return (
    <>
      <section className="main-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/notes" />} />

          <Route
            path="/notes"
            element={
              <NotesLayout
                selectedCategory={selectedCategory}
                deleteNote={deleteNote}
                categoryColors={categoryColors}
                setSelectedCategory={setSelectedCategory}
                word={word}
                setWord={setWord}
              />
            }
          />

          <Route path="/notes/:id" element={<NoteCard />} />

          <Route
            path="/form"
            element={<NoteForm data={formData} setFormData={setFormData} />}
          />
        </Routes>
      </section>

      <Footer />
    </>
  );
}

export default App;
