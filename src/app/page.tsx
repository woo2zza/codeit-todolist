"use client";

import React, { useEffect, useState } from "react";
import Typography from "../components/Typography";
import addTodo from "@/api/todoApi";
import GetItem from "@/components/getItem";
import { fetchTodoItems } from "@/api/fetchTodoItems";

type TodoListType = {
  id: number;
  name: string;
  isCompleted: boolean;
};

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<TodoListType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const items = await fetchTodoItems();
        setTodoList(items);
      } catch (err) {
        console.error("할 일을 가져오는 중 오류 발생:", err);
        setError("할 일을 가져오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  const handleSubmit = async () => {
    if (!todo.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }
    try {
      await addTodo(todo);
      const updatedItems = await fetchTodoItems();
      setTodoList(updatedItems);
      setTodo("");
    } catch {
      alert("요청에 실패했습니다.");
    }
  };

  if (loading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      <div className="items-center flex">
        <input
          type="text"
          placeholder="할 일을 입력해주세요"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="flex-1 p-3 rounded-full border-2 border-black bg-[#E2E8F0]"
          style={{
            boxShadow: "3px 3px 1px black",
          }}
        />
        <button
          onClick={handleSubmit}
          className="flex items-center ml-3 gap-2 px-6 py-3 font-bold rounded-full bg-[#E2E8F0] border-2 border-black"
          style={{
            boxShadow: "3px 3px 1px black",
          }}
        >
          <img src="/Image/Frame 2610256.svg" alt="Icon" className="h-5 w-5" />
          <Typography size="16px" weight="bold" className="desktop-logo">
            추가하기
          </Typography>
        </button>
      </div>

      <GetItem todoList={todoList} />
    </div>
  );
}
