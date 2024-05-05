import { useParams, useNavigate } from "react-router-dom";
import "./EditNote.scss"

export default function EditNote ({ notes, setNotes, setFilteredNotes }) {

    let navigate = useNavigate()

    const { id } = useParams()

    const currentNote = notes.filter(note => note.id === id)[0]

    function deleteNote() {
        const index = notes.findIndex(note => note.id === currentNote.id)
        const newNotes = [...notes]
        newNotes.splice(index, 1)
        setFilteredNotes(newNotes)
        setNotes(newNotes)
        navigate("/")
      }
        

    return(
        <div className="note">
            <div className="note__container">
                <h2>{currentNote.title}</h2>
                <h3>Entered On: {currentNote.date}</h3>
                <h3>{currentNote.category}</h3>
                <ul>{currentNote.tags.map((tag,i) => <li key={i}>{tag}</li>)}</ul>
                <p>{currentNote.content}</p>
                <div className="deleteButton"><button onClick={deleteNote}>Delete This Note</button></div>
            </div>
        </div>
    )
}