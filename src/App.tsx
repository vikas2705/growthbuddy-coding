import React, { useCallback, useState } from "react";
import "./App.css";
import CreateTodo from "./common/components/create-todo";
import TodoList from "./common/components/todo-list";
import { fetchCats } from "./common/apis/fetchCatFact";

function App() {
    const result: string[] = [];
    const [todoItems, setTodoItems] = useState(result);

    const fetchRandomCatFact = async () => {
        try {
            fetchCats()
                .then(res => {
                    const { fact } = res;
                    addNewItem(fact);
                })
                .catch(err => {
                    console.log(err);
                });
        } catch (err) {}
    };

    const addNewItem = useCallback(
        (itemName: string) => {
            const todoItemsCopy = [...todoItems];
            todoItemsCopy.push(itemName);
            setTodoItems(todoItemsCopy);
        },
        [todoItems]
    );

    const removeItem = useCallback(
        (index: number) => {
            const todoItemsCopy = [...todoItems];
            todoItemsCopy.splice(index, 1);
            setTodoItems(todoItemsCopy);
        },
        [todoItems]
    );

    return (
        <div className='App'>
            <header className='App-header'>
                <p>ToDo App</p>

                <CreateTodo addNewItem={addNewItem} />
                {todoItems.length > 0 && (
                    <TodoList todoItems={todoItems} removeItem={removeItem} />
                )}

                <button onClick={fetchRandomCatFact}>ADD CAT FACT</button>
            </header>
        </div>
    );
}

export default App;
