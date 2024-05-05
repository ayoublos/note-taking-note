import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NewNoteForm.scss";


export default function NewNoteForm() {
  let BASE_URL='https://6637c889288fedf69381538c.mockapi.io/api/v1/notes'
  let navigate = useNavigate();
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
    category: "",
  });
  function textChangeHandler(event) {
    setNewNote({ ...newNote, [event.target.id]: event.target.value });
  }
  function createNote(note) {
    const options = {
      method: "POST",
      body: JSON.stringify(note),
      headers: { "Content-Type": "application/json" },
    };
    return fetch(`${BASE_URL}`, options).then((response) => {
      return response.json();
    });
  }

  function submitHandle(e) {
    e.preventDefault();
    createNote(newNote)
    setNewNote({ title: "", body: ``, category: `` });

    navigate(`/`)
    console.log(newNote)
  }
 
  return (
    <>
      <form onSubmit={submitHandle}>
        <label htmlFor="">
          Title
          <br />
          <input
            className="title"
            id="title"
            value={newNote.title}
            onChange={textChangeHandler}
            placeholder="Please input a title"
            type="text"
          />
        </label>
        <br />
        <label htmlFor="">
          Category
          <br />
          <input
            className="category"
            id="category"
            value={newNote.category}
            onChange={textChangeHandler}
            placeholder="Please input a category"
            type="text"
          />
        </label>
        <br />

        <label htmlFor="">
          Content
          <br />
          <input
            className="content"
            id="body"
            value={newNote.body}
            onChange={textChangeHandler}
            placeholder="Please input a content"
            type="text"
          />
        </label>
        <br />
        <button
          onClick={() => {
            navigate(`/`);
          }}
          type="text"
        >
          Cancel
        </button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
