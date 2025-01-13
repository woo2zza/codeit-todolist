"use client";

import React, { useEffect, useState } from "react";
import GetItem from "@/components/getItem";
import { fetchTodoItems } from "@/api/fetchTodoItems";

type TodoListType = {
  id: number;
  name: string;
  isCompleted: boolean;
};

export default function TodoList() {
  const [todoList, setTodoList] = useState<TodoListType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const items = await fetchTodoItems();
        setTodoList(items);
      } catch (err) {
        console.error("데이터를 가져오는 중 오류 발생:", err);
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  const updateTodoList = (updatedTodo: TodoListType) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  if (loading) {
    return <p>로딩 중...</p>;
  }

  return <GetItem todoList={todoList} updateTodoList={updateTodoList} />;
}
