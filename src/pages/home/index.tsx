import PlaylistCard from "../components/playlist-card";
import VideoCard from "../components/video-card";

const Home = () => {
  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold ">Populer Videos</h2>
        <div className="grid grid-cols-4 gap-5 mt-3">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
      <div className="mt-5">
        <div className="py-10 bg-gray-500 w-full flex items-center justify-center">reklam</div>
      </div>
      <div className="mt-5">
        <h2 className="text-lg font-semibold ">Populer Playlists</h2>
        <div className="grid grid-cols-4 gap-5 mt-3">
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
