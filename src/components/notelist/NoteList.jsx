import './NoteList.scss';
import Note from '../note/Note';
import { useState } from 'react';
export default function NoteList({ handleTextChange, filteredNotes }) {

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
