"use client";

import React, { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import toggleComplete from "@/api/toggleComplete";

export default function DetailPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const initialName = searchParams.get("name") || "";
  const initialIsCompleted = searchParams.get("isCompleted") === "true";

  const [isCompleted, setIsCompleted] = useState(initialIsCompleted);
  const [name] = useState(initialName);

  const handleToggle = async () => {
    try {
      await toggleComplete(isCompleted, Number(id));
      setIsCompleted(!isCompleted);
    } catch (error) {
      console.error("상태 변경 중 오류 발생:", error);
      alert("상태 변경에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {isCompleted ? (
        <button
          className="flex items-center text-black flex-1 p-3 rounded-full border-2 border-black bg-[#EDE9FE]"
          style={{
            boxShadow: "3px 3px 1px black",
          }}
          onClick={handleToggle} // 버튼 클릭 시 상태 변경
        >
          <img
            src="/Image/Property 1=Frame 2610233.svg"
            alt="Icon"
            className="w-10 h-10 mr-5"
          />
          <div className="line-through">{name}</div>
        </button>
      ) : (
        <button
          className="flex items-center text-black flex-1 p-3 rounded-full border-2 border-black bg-[#F1F5F9]"
          style={{
            boxShadow: "3px 3px 1px black",
          }}
          onClick={handleToggle}
        >
          <img src="/Image/circle.svg" alt="Icon" className="w-10 h-10 mr-5" />
          <div>{name}</div>
        </button>
      )}
    </div>
  );
}
