impirt
export default function NoteList({data}){

    console.log(data)
    return (
        <div className="classList">
            {data.map(note => <Note key={note.id} note={note}/>)}
        </div>
    )
}