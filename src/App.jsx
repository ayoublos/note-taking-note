// import { useState } from "react";
import Header from "./components/header/Header.jsx";
import NoteList from "./components/notelist/NoteList.jsx";
import Note from "./components/note/Note.jsx";
import AboutUs from "./components/about us/AboutUs.jsx";
import PageNotFound from "./components/pagenotfound/PageNotFound.jsx";
import NewNoteForm from "./components/newnoteform/NewNoteForm.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from './data/data.json'

function App() {
  console.log(data)

  return (

    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<NoteList data={data} />} />
          <Route path="/notes" element={<NoteList data={data} />} />
          <Route path="/notes/:id/edit" element={<Note />} />
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
