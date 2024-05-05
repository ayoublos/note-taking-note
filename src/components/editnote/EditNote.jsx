import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditNote.scss"

export default function EditNote () {

    let navigate = useNavigate()

    const { id } = useParams()

    const [allNotes, setAllNotes] = useState([]);

    useEffect(() => {
      fetch('https://my-json-server.typicode.com/runquan-ray-zhou/demo/notes' + "/" + id)
        .then((response) => response.json())
        .then((response) => {
          setAllNotes(response);
        });
    }, []);

    // const currentNote = allNotes.filter(note => note.id === id)[0]

    // const [updateNote, setUpdateNote] = useState(currentNote)

    // function handleTextChange(e) {
    //     setUpdateNote({...updateNote,[e.target.id]: e.target.value})
    // }

    // function updateSingleNote(e) {
    //     e.preventDefault()
    //     const index = notes.findIndex(note => note.id === updateNote.id)
    //     const newNotes = [...notes]
    //     newNotes.splice(index, 1, updateNote)
    //     setFilteredNotes(newNotes)
    //     setNotes(newNotes)
    //     navigate("/")
    // }

    // function deleteNote() {
    //     const index = allNotes.findIndex(note => note.id === updateNote.id)
    //     const newNotes = [...notes]
    //     newNotes.splice(index, 1)
    //     setFilteredNotes(newNotes)
    //     setNotes(newNotes)
    //     navigate("/")
    //   }

    return(
        <div className="note">
            <div className="note__container">
                <form>
                    <label htmlFor="title">
                        <h1>
                            <input
                            // onChange={handleTextChange}
                            className="note__title"
                            id="title"
                            type="text"
                            value={allNotes.title}/>
                        </h1>
                    </label>
                    <label htmlFor="category">
                        <h3>
                            <input
                            // onChange={handleTextChange}
                            className="note__category"
                            id="category"
                            type="text"
                            value={allNotes.category}/>
                            </h3>
                    </label>
                    <label htmlFor="content">
                        <p>
                            <textarea
                            // onChange={handleTextChange}
                            className="note__body"
                            id="content"
                            style={{width: "100%"}}
                            rows="25"
                            value={allNotes.body}>
                            </textarea>
                        </p>
                    </label>
                    <div className="update-delete__button">
                        <button type="submit">Update This Note</button>
                        <button> Delete This Note</button>
                    </div>
                </form>
            </div>
        </div>
    )
}