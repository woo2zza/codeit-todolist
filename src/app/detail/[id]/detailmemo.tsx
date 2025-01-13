import Image from "next/image";
import { useEffect, useRef } from "react";

export default function DetailMemo({
  memo,
  onMemoChange,
}: {
  memo: string;
  onMemoChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [memo]);

  return (
    <article
      className={`w-full h-[312px] bg-[url('/Image/memo.svg')] rounded-[20px] bg-center bg-cover flex flex-col py-[24px] px-[16px] items-center gap-[16px]`}
    >
      <Image
        src="/Image/pencil.svg"
        alt="memo_heading"
        width={64}
        height={64}
      />
      <div className="flex items-center justify-center w-full h-full">
        <textarea
          ref={textareaRef}
          value={memo}
          onChange={onMemoChange}
          className="text-center w-full max-h-[229px] h-auto outline-none bg-transparent overflow-y-auto resize-none scrollbar-thin scrollbar-thumb-amber-200 text-gray-700 placeholder-gray-400"
          placeholder="메모를 입력하세요..."
        />
      </div>
    </article>
  );
}
