import Note from "../note/Note"
import "./NoteList.scss"
export default function NoteList({data}){

    return (
        <>
            <div className="search">
                <form>
                    <input type="text" name="search" id="search" placeholder="Search"/>
                </form>
            </div>
        <div className="noteList">
          {data.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </div>
      </>
    );
}