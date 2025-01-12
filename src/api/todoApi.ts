type TodoListType = {
  id: number;
  name: string;
  isCompleted: boolean;
};

export default async function addTodo(name: string): Promise<TodoListType> {
  try {
    const response = await fetch(
      "https://assignment-todolist-api.vercel.app/api/woo2zza/items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data: TodoListType = await response.json();
    return data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error;
  }
}
