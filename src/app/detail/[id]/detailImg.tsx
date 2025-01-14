import React, { useState } from "react";
import Image from "next/image";
import postImage from "@/api/postImg";

export default function DetailImage({
  imageUrl,
  onImageChange,
}: {
  imageUrl: string | null;
  onImageChange: (uri: string) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsLoading(true);

    if (file.size > 5 * 1024 * 1024) {
      window.alert("5MB 이하의 파일만 업로드 가능합니다.");
      setIsLoading(false);
      return;
    }
    if (!/^[a-zA-Z0-9가-힣_.\-\s]+$/.test(file.name)) {
      window.alert("파일명은 영어, 한글, 숫자, 공백, -, _만 허용됩니다.");
      setIsLoading(false);
      return;
    }
    if (file.type.split("/")[0] !== "image" || file.name.endsWith(".svg")) {
      window.alert("이미지 파일만 업로드 가능합니다.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await postImage(file);
      console.log("업로드된 이미지 URL:", res.url);
      onImageChange(res.url);
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
      window.alert("이미지 업로드에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
      }}
      className={`flex bg-center bg-cover ${
        !imageUrl && "border-2 border-dashed border-gray-300"
      } justify-center relative w-full h-[312px] bg-slate-50 rounded-[20px]`}
    >
      {!imageUrl && (
        <Image src="/Image/img.svg" alt="img" width={64} height={64} />
      )}
      <label htmlFor="file-input">
        <div
          className={`rounded-full cursor-pointer bottom-[16px] right-[16px] ${
            imageUrl
              ? "bg-btn-edit border-2 border-primary-900"
              : "bg-primary-200"
          } absolute size-[64px] flex justify-center items-center`}
        >
          {isLoading ? (
            <span className="loader">로딩 중...</span>
          ) : (
            <Image
              src={imageUrl ? "/Image/circleEdit.svg" : "/Image/circlePlus.svg"}
              alt="edit"
              width={64}
              height={64}
            />
          )}
        </div>
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/gif"
        className="hidden"
        id="file-input"
        onChange={handleFileChange}
      />
    </div>
  );
}
