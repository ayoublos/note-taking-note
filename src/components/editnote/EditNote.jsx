import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditNote.scss"

export default function EditNote ({ notes, setNotes, setFilteredNotes }) {

    let navigate = useNavigate()
    
    const { id } = useParams()

    const currentNote = notes.filter(note => note.id === id)[0]
    
    const [updateNote, setUpdateNote] = useState(currentNote)

    function handleTextChange(e) {
        setUpdateNote({...updateNote,[e.target.id]: e.target.value})
    }

    function updateSingleNote(e) {
        e.preventDefault()
        const index = notes.findIndex(note => note.id === updateNote.id)
        const newNotes = [...notes]
        newNotes.splice(index, 1, updateNote)
        setFilteredNotes(newNotes)
        setNotes(newNotes)
        navigate("/")
    }

    function deleteNote() {
        const index = notes.findIndex(note => note.id === updateNote.id)
        const newNotes = [...notes]
        newNotes.splice(index, 1)
        setFilteredNotes(newNotes)
        setNotes(newNotes)
        navigate("/")
      }
        
    return(
        <div className="note">
            <div className="note__container">
                <form onSubmit={updateSingleNote}>
                    <label htmlFor="title">
                        <h1>
                            <input
                            onChange={handleTextChange}
                            className="note__title" 
                            id="title" 
                            type="text" 
                            value={updateNote.title}/>
                        </h1>
                    </label>
                    <label htmlFor="date">
                        <h3>Entered On: 
                            <input
                            onChange={handleTextChange}
                            className="note__date" 
                            id="date" 
                            type="text" 
                            value={updateNote.date}/>
                        </h3>
                    </label>
                    <label htmlFor="category">
                        <h3>
                            <input
                            onChange={handleTextChange}
                            className="note__category" 
                            id="category" 
                            type="text" 
                            value={updateNote.category}/>
                            </h3>
                    </label>
                    <ul>{currentNote.tags.map((tag,i) => <li key={i}>{tag}</li>)}</ul>
                    <label htmlFor="content">
                        <p>
                            <textarea
                            onChange={handleTextChange} 
                            className="note__body" 
                            id="content" 
                            style={{width: "100%"}}
                            rows="25" 
                            value={updateNote.content}>
                            </textarea>
                        </p>
                    </label>
                    <div className="update-delete__button">
                        <button type="submit">Update This Note</button>
                        <button onClick={deleteNote}>Delete This Note</button>
                    </div>
                </form>
            </div>
        </div>
    )
}