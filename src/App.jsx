import { useState } from "react";
import Header from "./components/header/Header.jsx";
import NoteList from "./components/notelist/NoteList.jsx";
import Note from "./components/note/Note.jsx";
import EditNote from "./components/editnote/EditNote.jsx";
import AboutUs from "./components/about us/AboutUs.jsx";
import PageNotFound from "./components/pagenotfound/PageNotFound.jsx";
import NewNoteForm from "./components/newnoteform/NewNoteForm.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from './data/data.json'

function App() {
const [notes, setNotes] = useState(data);
const [filteredNotes, setFilteredNotes] = useState(notes);
const [searchTitle, setSearchTitle] = useState('');

function handleTextChange(event) {
  const title = event.target.value;
  const result = title.length ? filterNotes(title, notes) : notes;
  setSearchTitle(title);
  setFilteredNotes(result);
}

function filterNotes(search, notes) {
  return notes.filter((note) => {
    return note.title.toLowerCase().match(search.toLowerCase());
  });
}
  
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<NoteList handleTextChange={handleTextChange} filteredNotes={filteredNotes} />} />
          <Route path="/notes" element={<NoteList handleTextChange={handleTextChange} filteredNotes={filteredNotes} />} />
          <Route path="/notes/:id/edit" element={<EditNote notes={notes} setNotes={setNotes} setFilteredNotes={setFilteredNotes}/>} />
          <Route path="/notes/new" element={<NewNoteForm />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
