import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditNote.scss"

export default function EditNote () {

    let navigate = useNavigate()
    
    const { id } = useParams()

    const [currentNote, setCurrentNote] = useState({
        title: "",
        body: "",
        category: "",
      });

    useEffect(() => {
      fetch('https://6637c889288fedf69381538c.mockapi.io/api/v1/notes' + "/" + id)
        .then((response) => response.json())
        .then((response) => {
          setCurrentNote(response);
        });
    }, []);

    function handleTextChange(e) {
        setCurrentNote({...currentNote,[e.target.id]: e.target.value})
    }

    function updateSingleNote(e, ) {
        e.preventDefault()
        const options = {
            method: "PUT",
            body: JSON.stringify(currentNote),
            headers: { "Content-Type": "application/json" },
          };
          return fetch(`https://6637c889288fedf69381538c.mockapi.io/api/v1/notes/${id}`, options).then((response) => {
            return response.json();
          }) .then(() => {
            navigate("/");
          })
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
                            value={currentNote.title}/>
                        </h1>
                    </label>
                    <label htmlFor="category">
                        <h3>
                            <input
                            onChange={handleTextChange}
                            className="note__category" 
                            id="category" 
                            type="text" 
                            value={currentNote.category}/>
                            </h3>
                    </label>
                    <label htmlFor="content">
                        <p>
                            <textarea
                            onChange={handleTextChange} 
                            className="note__body" 
                            id="body" 
                            style={{width: "100%"}}
                            rows="25" 
                            value={currentNote.body}>
                            </textarea>
                        </p>
                    </label>
                    <div className="update-delete__button">
                        <button type="submit">Update This Note</button>
                        <button>Delete This Note</button>
                    </div>
                </form>
            </div>
        </div>
    )
}