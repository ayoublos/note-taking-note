import { useParams } from "react-router-dom";
import "./EditNote.scss"

export default function EditNote ({data}) {

    const { id } = useParams()

    return(
        <div class="note">
            <div className="note__container">
                <h2>{data[id-1].title}</h2>
                <h3>Entered On: {data[id-1].date}</h3>
                <h3>{data[id-1].category}</h3>
                <ul>{data[id-1].tags.map((tag,i) => <li key={i}>{tag}</li>)}</ul>
                <p>{data[id-1].content}</p>
            </div>
        </div>
    )
}