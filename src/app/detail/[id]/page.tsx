"use client";

import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import toggleComplete from "@/api/toggleComplete";
import getTodoDetail from "@/api/getTodoDetail";
import updateDetail from "@/api/updateDetail";
import deleteTodo from "@/api/deleteTodo";
import DetailImage from "./detailImg";
import DetailMemo from "./detailmemo";

export default function DetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialName = searchParams.get("name") || "";
  const initialIsCompleted = searchParams.get("isCompleted") === "true";

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [memo, setMemo] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState(initialIsCompleted);
  const [name, setName] = useState(initialName);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getTodoDetail(Number(id));
        setImageUrl(data.imageUrl);
        setMemo(data.memo || "");
        setIsCompleted(data.isCompleted);
        setName(data.name);
      } catch (err) {
        console.error("데이터 가져오기 실패:", err);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleToggle = async () => {
    try {
      await toggleComplete(isCompleted, Number(id));
      setIsCompleted(!isCompleted);
    } catch (error) {
      console.error("상태 변경 중 오류 발생:", error);
      alert("상태 변경에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleMemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  };

  const handleUpdateDetail = async () => {
    try {
      const todoDetail = {
        isCompleted,
        imageUrl,
        memo,
        name,
        id: Number(id),
      };
      if (imageUrl !== null) {
        todoDetail.imageUrl = imageUrl;
      }
      if (memo.trim() !== "") {
        todoDetail.memo = memo;
      }

      const updatedData = await updateDetail(Number(id), todoDetail);
      console.log("업데이트된 데이터:", updatedData);
      alert("수정이 완료되었습니다.");
    } catch (error) {
      console.error("수정 중 오류 발생:", error);
      alert("수정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleDeleteTodo = async () => {
    const confirmDelete = confirm("정말로 삭제하시겠습니까?");
    if (!confirmDelete) return;

    try {
      await deleteTodo(Number(id));
      alert("삭제가 완료되었습니다.");
      router.push("/");
    } catch (error) {
      console.error("삭제 중 오류 발생:", error);
      alert("삭제에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        {isCompleted ? (
          <button
            className="flex items-center text-black justify-center flex-1 p-3 rounded-full border-2 border-black bg-[#EDE9FE]"
            style={{
              boxShadow: "3px 3px 1px black",
            }}
            onClick={handleToggle}
          >
            <img
              src="/Image/Property 1=Frame 2610233.svg"
              alt="Icon"
              className="w-10 h-10 mr-5"
            />
            <div className="underline">{name}</div>
          </button>
        ) : (
          <button
            className="flex items-center justify-center text-black flex-1 p-3 rounded-full border-2 border-black bg-[#F1F5F9]"
            style={{
              boxShadow: "3px 3px 1px black",
            }}
            onClick={handleToggle}
          >
            <div className="flex items-center justify-center">
              <img
                src="/Image/circle.svg"
                alt="Icon"
                className="w-10 h-10 mr-3"
              />
              <div className="underline">{name}</div>
            </div>
          </button>
        )}
      </div>

      <div className="flex flex-col mt-10 gap-[30px] lg:flex-row ">
        {/* DetailImage 컴포넌트 */}
        <div className="w-full lg:w-2/5">
          <DetailImage imageUrl={imageUrl} onImageChange={setImageUrl} />
        </div>

        {/* memo 컴포넌트 */}
        <div className="w-ful lg:w-3/5">
          <DetailMemo memo={memo} onMemoChange={handleMemoChange} />
        </div>
      </div>

      {isCompleted ? (
        <div className="flex mt-5 lg:justify-end justify-center">
          <img
            src="/Image/edit.svg"
            alt="Icon"
            className="w-100 h-15 mr-5"
            onClick={handleUpdateDetail}
          />
          <img
            src="/Image/delete.svg"
            alt="delete"
            className="w-100 h-15 mr-5"
            onClick={handleDeleteTodo}
          />
        </div>
      ) : (
        <div className="flex mt-5 lg:justify-end justify-center">
          <img
            src="/Image/editwhite.svg"
            alt="Icon"
            className="w-100 h-15 mr-5"
            onClick={handleUpdateDetail}
          />
          <img
            src="/Image/delete.svg"
            alt="delete"
            className="w-100 h-15 mr-5"
            onClick={handleDeleteTodo}
          />
        </div>
      )}
    </div>
  );
}
