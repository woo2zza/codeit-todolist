"use client";

import React from "react";

type TodoListType = {
  id: number;
  name: string;
  isCompleted: boolean;
};

type GetItemProps = {
  todoList: TodoListType[];
};

export default function GetItem({ todoList }: GetItemProps) {
  return (
    <div>
      <div className="mt-10 flex">
        <div>
          <img src="/Image/todo.svg" alt="Done Icon" width="80" />
        </div>
      </div>
      <ul className="mt-4">
        {todoList.map((todo) => (
          <li key={todo.id} className="p-2 border-b border-gray-300">
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
