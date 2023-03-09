import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { Blank, BlankInput, BankButton } from "./styled"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();
        if (trimmedNewTaskContent === "") {
            return;
        }

        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
        }))

        setNewTaskContent("");
        inputRef.current.focus();
    }

    return (
        <Blank
            onSubmit={onFormSubmit}
        >
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
                <BankButton>
                    Dodaj zadanie
                </BankButton>
            </label>
        </Blank>
    )
};

export default Form;