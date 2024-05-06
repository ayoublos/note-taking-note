import './NoteList.scss';
import Note from '../note/Note';
import { useEffect, useState } from 'react';

export default function NoteList() {
  const [allNotes, setAllNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Use useEffect to fetch data from a server and update allNotes
  useEffect(() => {
    fetch('https://6637c889288fedf69381538c.mockapi.io/api/v1/notes')
      .then((response) => response.json())
      .then((response) => {
        setAllNotes(response);
      });
  }, []);

  // Set filteredNotes to update as allNotes updates
  useEffect(() => {
    setFilteredNotes(allNotes);
  }, [allNotes]);

  // Handle text change on user search bar
  function handleTextChange(event) {
    const search = event.target.value;
    setSearchQuery(search);
    // If search is not empty, filter notes by title. Else, return all notes.
    const result = search.length ? filterNotes(search, allNotes) : allNotes;
    setFilteredNotes(result);
  }

  // Filter each note by title
  function filterNotes(search, allNotes) {
    return allNotes.filter((note) => {
      return (
        note.title.toLowerCase().match(search.toLowerCase()) ||
        note.body.toLowerCase().match(search.toLowerCase())
      );
    });
  }

  return (
    <>
      <div className="search">
        <form>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            onChange={handleTextChange}
          />
        </form>
      </div>
      <div className="noteList">
        {/* Map through each filtered note */}
        {filteredNotes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </>
  );
}
