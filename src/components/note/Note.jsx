import "./Note.scss"
export default function Note({note}){

    return (
        <div className="singleNote">
            <div className="singNote__container">
                <h2>{note.title}</h2>
                <h3>Entered On: {note.date}</h3>
                <h3>{note.category}</h3>
                <ul>{note.tags.map((tag,i) => <li key={i}>{tag}</li>)}</ul>
                <p>{note.content}</p>
            </div>
        </div>
    )
}