"use client";

import React from "react";
import { useRouter } from "next/navigation";
import toggleComplete from "@/api/toggleComplete";

type TodoListType = {
  id: number;
  name: string;
  isCompleted: boolean;
};

type GetItemProps = {
  todoList: TodoListType[];
  updateTodoList: (updatedTodo: TodoListType) => void;
};

export default function GetItem({ todoList, updateTodoList }: GetItemProps) {
  const router = useRouter();
  const todos = todoList.filter((todo) => !todo.isCompleted);
  const dones = todoList.filter((todo) => todo.isCompleted);

  const handleToggle = async (todo: TodoListType) => {
    try {
      await toggleComplete(todo.isCompleted, todo.id);
      updateTodoList({ ...todo, isCompleted: !todo.isCompleted });
    } catch (error) {
      console.error("상태 변경 중 오류 발생:", error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const goToDetail = (id: number, isCompleted: boolean, name: string) => {
    router.push(
      `/detail/${id}?isCompleted=${isCompleted}&name=${encodeURIComponent(
        name
      )}`
    );
  };

  return (
    <div className="flex flex-col lg:flex-row  gap-5">
      {/* To Do 리스트 */}
      <div className="flex-1 p-4">
        <div className="mb-5 mt-7">
          <img src="/Image/todo.svg" alt="todo" />
        </div>
        {todos.length > 0 ? (
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
                    onClick={() => handleToggle(todo)}
                  />
                  <div
                    onClick={() =>
                      goToDetail(todo.id, todo.isCompleted, todo.name)
                    }
                  >
                    {todo.name}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <div className="flex justify-center items-center mt-[60px]">
              <img src="/Image/nothingDoneLarge.svg" alt="Nothing to do" />
            </div>
            <div className="flex justify-center items-center text-center text-gray-400">
              할 일이 없어요.
              <br /> TODO를 새롭게 추가해주세요!
            </div>
          </div>
        )}
      </div>

      {/* Done 리스트 */}
      <div className="flex-1  rounded-lg p-4 ">
        <div className="mb-5 mt-7">
          <img src="/Image/done.svg" alt="todo" />
        </div>
        {dones.length > 0 ? (
          <ul>
            {dones.map((todo) => (
              <li key={todo.id} className="flex pt-1.5 pb-1.5 mb-2">
                <button
                  className="flex items-center text-black flex-1 p-3 rounded-full border-2 border-black bg-[#EDE9FE]"
                  style={{
                    boxShadow: "3px 3px 1px black",
                  }}
                >
                  <img
                    src="/Image/Property 1=Frame 2610233.svg"
                    alt="Icon"
                    className="w-10 h-10 mr-5"
                    onClick={() => handleToggle(todo)}
                  />
                  <div
                    onClick={() =>
                      goToDetail(todo.id, todo.isCompleted, todo.name)
                    }
                    className="line-through"
                  >
                    {todo.name}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <div className="flex justify-center items-center mt-[60px]">
              <img src="/Image/nothingLarge.svg" alt="Nothing" />
            </div>
            <div className="mt-[20px] flex justify-center items-center text-center text-gray-400">
              아직 다 한 일이 없어요.
              <br /> 해야 할 일을 체크해보세요!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
