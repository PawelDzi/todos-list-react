import { useState, useRef } from "react";
import { Blank, Label, BlankInput, BankButton } from "./styled"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();
        if (trimmedNewTaskContent === "") {
            return;
        }
        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    }

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <Blank
            onSubmit={onFormSubmit}>
            <label>
                <BlankInput
                    value={newTaskContent}
                    type="text"
                    placeholder="Co jest do zrobienia?"
                    onChange={({ target }) => setNewTaskContent(target.value)}
                    ref={inputRef}
                />
            </label>
            <label>
                <BankButton
                    onClick={focusInput}
                >
                    Dodaj zadanie
                </BankButton>
            </label>
        </Blank>
    )
};

export default Form;