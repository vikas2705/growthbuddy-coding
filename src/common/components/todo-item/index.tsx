import React from "react";

interface todoItemProps {
    todoItem: string;
    removeItem: (index: number) => void;
    index: number;
}
const TodoItem = (props: todoItemProps) => {
    const { todoItem = "", removeItem, index } = props;

    return (
        <div>
            <h3>{todoItem}</h3>
            <span
                onClick={() => {
                    removeItem(index);
                }}
            >
                Remove
            </span>
        </div>
    );
};

export default React.memo(TodoItem);
