import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import NotesLayout from "./components/NotesLayout/NotesLayout";
import NoteForm from "./containers/NoteForm/NoteForm";

function App() {
  return (
    <>
      <NavBar />
      <NotesLayout />
      <NoteForm></NoteForm>
    </>
  );
}

export default App;
