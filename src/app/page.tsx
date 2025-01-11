import Typography from "./components/Typography";
import Link from "next/link";
import ColorBox from "./components/ColorBox";
import Button from "./components/Button";

export default function TodoList() {
  const colors = [
    { color: "#0F172A", label: "slate/900" },
    { color: "#7C3AED", label: "violet/600" },
    { color: "#F1F5F9", label: "slate/100" },
    { color: "#92400E", label: "amber/800" },
  ];

  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        <li>
          <Link href="/detail">go to detail</Link>
        </li>
      </ul>
      <Typography size="20px" weight="bold">
        NanumSquare Bold 20px
      </Typography>
      <Typography size="18px" weight="bold">
        NanumSquare Bold 18px
      </Typography>
      <Typography size="16px" weight="bold">
        NanumSquare Bold 16px
      </Typography>
      <Typography size="16px" weight="regular">
        NanumSquare Regular 16px
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}
      >
        {colors.map((colorObj, index) => (
          <ColorBox key={index} color={colorObj.color} label={"ㅇㅇ"} />
        ))}
      </div>

      <h1>Reusable Image Component</h1>
      <h1>Reusable SVG Icons</h1>
      <div>
        <img src="/Image/done.svg" alt="Done Icon" width="50" height="50" />
      </div>

      <h1 className="text-xl font-bold mb-4">Button Examples</h1>
      <Button label="클릭하세요" />
      <Button
        label="추가하기"
        backgroundColor="#E2E8F0"
        textColor="#FFFFFF"
        width={150}
        height={50}
      />
      <Button
        icon={<img src="/Image/img.svg" alt="plus" width="16" height="16" />}
        backgroundColor="#6C757D"
        width={250}
        label="버튼"
        height={50}
      />

      <Button
        label="사용자 정의 버튼"
        icon={<img src="/Image/img.svg" alt="icon" width="16" />}
        backgroundColor="#FF6347"
        textColor="#FFFFFF"
        width={150}
        height={50}
      />
    </div>
  );
}
