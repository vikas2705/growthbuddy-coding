import React from "react";
import TodoItem from "../todo-item";

interface todoProps {
    todoItems: string[];
    removeItem: (index: number) => void;
}
const TodoList = (props: todoProps) => {
    const { todoItems = [], removeItem } = props;

    return (
        <div>
            {todoItems.map((todoItem, index) => {
                return (
                    <TodoItem
                        todoItem={todoItem}
                        key={todoItem}
                        removeItem={removeItem}
                        index={index}
                    />
                );
            })}
        </div>
    );
};

export default React.memo(TodoList);
