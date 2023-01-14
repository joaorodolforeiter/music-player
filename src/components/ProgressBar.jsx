export default function ProgressBar({ progress, max }) {
  return (
    <div className="h-[6px] bg-[#d9d9d94d] rounded-full">
      <div
        style={{ width: `${progress}%` }}
        className="h-full bg-[#D9D9D9] rounded-full"
      ></div>
    </div>
  );
}
