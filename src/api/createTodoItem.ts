export async function createTodoItem(name: string): Promise<void> {
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
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error;
  }
}
