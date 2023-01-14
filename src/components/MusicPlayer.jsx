import ProgressBar from "./ProgressBar";

import play from "./../assets/play.png";
import playForward from "./../assets/play-forward.png";
import playBack from "./../assets/play-back.png";

export default function MusicPlayer({
  title,
  artistName,
  albumCover,
  progress,
  horizontal,
  audioLenght,
}) {
  return (
    <div
      className={
        "bg-[#2A2141] flex flex-col items-center justify-center rounded-xl text-white gap-7 " +
        (horizontal ? "p-7" : "px-9 py-12")
      }
    >
      <div
        className={`${horizontal ? "flex-row" : "flex-col"} w-full flex gap-7`}
      >
        <img
          className={"rounded-xl " + (horizontal ? "w-1/4" : "w-full")}
          src={albumCover}
          alt="Album Cover"
        />
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="text-2xl font-bold text-[#E1E1E6]">{title}</div>
          <div className="text-xl text-[#E1E1E6AF]">{artistName}</div>
        </div>
      </div>
      <div className="flex justify-between w-52">
        <button>
          <img src={playBack} alt="Play Back" />
        </button>
        <button>
          <img src={play} alt="Play" />
        </button>
        <button>
          <img src={playForward} alt="Play Forward" />
        </button>
      </div>
      {progress && (
        <div className="flex flex-col gap-2 w-full">
          <ProgressBar progress={40} />
          <div className="w-full flex justify-between">
            <div className="text-[#C4C4CC]">3:20</div>
            <div className="text-[#C4C4CC]">0:12</div>
          </div>
        </div>
      )}
    </div>
  );
}
