import { Link } from "react-router-dom"
import "./Note.scss"
export default function Note({note}){

    return (
        <div className="singleNote">
            {/* <Link to={`/notes/${note.id}/edit`}> */}
            <div className="singNote__container">
                <h2>{note.title}</h2>
                <h3>{note.category}</h3>
                <p>{note.body}</p>
            </div>
            {/* </Link> */}
        </div>
    )
}