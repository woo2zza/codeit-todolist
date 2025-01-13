type TodoListDetailType = {
  isCompleted: boolean;
  imageUrl: string | null;
  memo: string | null;
  name: string;
  tenantId: string;
  id: number;
};

export default async function getTodoDetail(
  id: number
): Promise<TodoListDetailType> {
  try {
    const res = await fetch(
      `https://assignment-todolist-api.vercel.app/api/woo2zza/items/${id}`
    );
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }

    return res.json();
  } catch (error) {
    throw error;
  }
}
