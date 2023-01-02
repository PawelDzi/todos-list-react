import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <label>
                <input value={newTaskContent}
                    className="form__input"
                    type="text"
                    placeholder="Co jest do zrobienia?"
                    onChange={({target}) => setNewTaskContent(target.value)}
                    />
            </label>
            <label>
                <button className="form__button ">Dodaj zadanie</button>
            </label>
        </form>
    )
};

export default Form;