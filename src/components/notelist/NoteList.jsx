import './NoteList.scss';
import Note from '../note/Note';
import { useEffect, useState } from 'react';

export default function NoteList() {

  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/runquan-ray-zhou/demo/notes')
      .then((response) => response.json())
      .then((response) => {
        setAllNotes(response);
      });
  }, []);
  
//   function handleTextChange(event) {
//     const title = event.target.value;
//     const result = title.length ? filterNotes(title, notes) : notes;
//     setSearchTitle(title);
//     setFilteredNotes(result);
//   }
  
//   function filterNotes(search, notes) {
//     return notes.filter((note) => {
//       return note.title.toLowerCase().match(search.toLowerCase());
//     });
//   }

  return (
    <>
      <div className="search">
        <form>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            // onChange={handleTextChange}
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
