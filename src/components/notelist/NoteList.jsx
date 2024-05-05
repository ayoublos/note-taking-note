import './NoteList.scss';
import Note from '../note/Note';
import { useEffect, useState } from 'react';

export default function NoteList({ handleTextChange }) {
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/RazEfron/demo/notes')
      .then((response) => response.json())
      .then((response) => {
        setAllNotes(response);
      });
  }, []);

  console.log(allNotes);

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
        {allNotes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </>
  );
}
