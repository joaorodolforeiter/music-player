import MusicPlayer from "./components/MusicPlayer.jsx";
import devinhoCover from "./assets/DevinhoCover.png";

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#0F0D13] gap-8">
      <MusicPlayer
        title="Acorda Devinho"
        artistName="Banda Rocketseat"
        albumCover={devinhoCover}
        progress
      />
      <div className="flex flex-col gap-8">
        <MusicPlayer
          title="Acorda Devinho"
          artistName="Banda Rocketseat"
          albumCover={devinhoCover}
          horizontal
          progress
        />
        <MusicPlayer
          title="Acorda Devinho"
          artistName="Banda Rocketseat"
          albumCover={devinhoCover}
          horizontal
        />
      </div>
    </div>
  );
}
