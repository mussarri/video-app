import PlaylistCard from "../../components/playlist-card";
import VideoCard from "../../components/video-card";

const ProfileHome = () => {
  return (
    <div>
      <div className="mt-2">
        <h2 className="text-lg font-semibold ">Last Videos</h2>
        <div className="grid grid-cols-4 gap-5 mt-3">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-lg font-semibold ">Playlists</h2>
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

export default ProfileHome;
