export default async function deleteTodo(id: number) {
  try {
    const res = await fetch(
      `https://assignment-todolist-api.vercel.app/api/woo2zza/items/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
  } catch (error) {
    throw error;
  }
}
