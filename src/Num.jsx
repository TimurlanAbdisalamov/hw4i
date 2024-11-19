import { useSelector } from "react-redux";

export default function Num() {
  const num = useSelector((state) => state.reducer.num);
  const text = useSelector((state) => state.reducer.text);

  return (
    <div>
      <h1>Number: {num}</h1>
      <h2>Text: {text}</h2>
    </div>
  );
}
