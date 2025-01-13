export default async function postImage(file: File) {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(
      "https://assignment-todolist-api.vercel.app/api/woo2zza/images/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || `HTTP Error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("이미지 업로드 실패:", error);
    throw error;
  }
}
