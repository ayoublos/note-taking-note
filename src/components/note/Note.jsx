import { Link } from "react-router-dom"
import "./Note.scss"
export default function Note({note}){

    return (
    <Link to={`/notes/${note.id}/edit`}>
        <div className="singleNote">
            <div className="singNote__container">
                <h2>{note.title}</h2>
                <h3>{note.category}</h3>
                <p>{note.body}</p>
            </div>
        </div>
    </Link>
    )
}