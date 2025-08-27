import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import NotesLayout from "./components/NotesLayout/NotesLayout";
import NoteForm from "./containers/NoteForm/NoteForm";
import { Navigate, Route, Routes } from "react-router";
import Footer from "./components/Footer/Footer";
import NoteCard from "./components/NoteCard/NoteCard";
import EditForm from "./containers/NoteEditForm/EditForm";
import NotFound from "./components/NotFound/NotFound";

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

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

  const deleteNote = async (idToDelete) => {
    try {
      const response = await fetch(`${API_URL}/notes/${idToDelete}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("An error occurred while trying delete request");
      }

      await response.json();
    } catch (error) {
      console.error("An error occured with the request:", error.message);
    }
  };

  function resetFilters() {
    setSelectedCategory("");
    setWord("");
  }

  function resetDataForm() {
    setFormData({
      title: "",
      description: "",
      picture: "",
      link: "",
      category: "",
    });
  }

  return (
    <>
      <section className="main-container">
        <NavBar resetFilters={resetFilters} />
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
                notes={notes}
                setNotes={setNotes}
              />
            }
          />

          <Route
            path="/notes/:id"
            element={
              <NoteCard
                deleteNote={deleteNote}
                categoryColors={categoryColors}
              />
            }
          />

          <Route
            path="/form"
            element={
              <NoteForm
                data={formData}
                setFormData={setFormData}
                resetDataForm={resetDataForm}
              />
            }
          />

          <Route path="/form/edit/:id" element={<EditForm />} />

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </section>

      <Footer />
    </>
  );
}

export default App;
