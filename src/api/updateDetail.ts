type TodoListDetailType = {
  isCompleted: boolean;
  imageUrl: string | null;
  memo: string | null;
  name: string;
  tenantId: string;
  id: number;
};

type TodoDetailType = Omit<TodoListDetailType, "tenantId">;

export default async function updateDetail(
  todoId: number,
  todoDetail: TodoDetailType
) {
  try {
    const { id, ...data } = todoDetail;
    const response = await fetch(
      `https://assignment-todolist-api.vercel.app/api/woo2zza/items/${todoId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API 호출 중 오류:", error);
    throw error;
  }
}
