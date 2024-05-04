import Note from "../note/Note"
import "./NoteList.scss"
export default function NoteList({data}){

    return (
        <div className="noteList">
            {data.map(note => <Note key={note.id} note={note}/>)}
        </div>
    )
}