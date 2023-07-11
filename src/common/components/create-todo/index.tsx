import React, { useState } from "react";

interface todoProps {
    addNewItem: (str: string) => void;
}

const CreateTodo = (props: todoProps) => {
    const [todoText, setTodoText] = useState("");
    const { addNewItem } = props;

    const handleTodoText = (e: any) => {
        setTodoText(e.target.value);
    };

    const handleFormSubmit = (e: any) => {
        addNewItem(todoText);
        e.preventDefault();
        setTodoText("");
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type='text'
                    onChange={handleTodoText}
                    value={todoText}
                    placeholder='Enter Todo Name...'
                />
                <input type='submit' name='Search' />
            </form>
        </div>
    );
};

export default React.memo(CreateTodo);
