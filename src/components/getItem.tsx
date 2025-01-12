"use client";

import React from "react";
import checkbox_todo from "../../public/Image/Property 1=Frame 2610233.svg";

type TodoListType = {
  id: number;
  name: string;
  isCompleted: boolean;
};

type GetItemProps = {
  todoList: TodoListType[];
};

export default function GetItem({ todoList }: GetItemProps) {
  // 체크 여부에 따라 리스트를 나눔
  const todos = todoList.filter((todo) => !todo.isCompleted);
  const dones = todoList.filter((todo) => todo.isCompleted);

  return (
    <div className="flex flex-col lg:flex-row  gap-5">
      {/* To Do 리스트 */}
      <div className="flex-1 p-4">
        <div className="mb-5 mt-7">
          <img src="/Image/todo.svg" alt="todo" />
        </div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="flex pt-1.5 pb-1.5 mb-2 ">
              <button
                className="flex items-center text-black flex-1 p-3 rounded-full border-2 border-black bg-[#F1F5F9]"
                style={{
                  boxShadow: "3px 3px 1px black",
                }}
              >
                <img
                  src="/Image/circle.svg"
                  alt="Icon"
                  className="w-10 h-10 mr-5"
                />
                {todo.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Done 리스트 */}
      <div className="flex-1  rounded-lg p-4 ">
        <div className="mb-5 mt-7">
          <img src="/Image/done.svg" alt="todo" />
        </div>

        <ul>
          {dones.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-2 mb-2 border border-gray-300 rounded-lg shadow-sm"
            >
              <span className="text-gray-700">{todo.name}</span>
              <input
                type="checkbox"
                className="w-5 h-5"
                defaultChecked={todo.isCompleted}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
