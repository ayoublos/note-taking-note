import './NoteList.scss';
import Note from '../note/Note';
import { useState } from 'react';
export default function NoteList({ data }) {
  const [notes, setNotes] = useState(data);
  const [filteredNotes, setFilteredNotes] = useState(data);
  const [searchTitle, setSearchTitle] = useState('');

  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length
      ? filterNotes(title, notes)
      : notes;
    setSearchTitle(title);
    setFilteredNotes(result);
  }


  function filterNotes(search, notes) {
    return notes.filter((note) => {
      return note.title.toLowerCase().match(search.toLowerCase());
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
        {filteredNotes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </>
  );
}
