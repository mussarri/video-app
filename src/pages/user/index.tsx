import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { useParams } from "react-router-dom";
import PlaylistCard from "../components/playlist-card";

const User = () => {
  const { username } = useParams();
  return (
    <div className="flex flex-col h-full max-width">
      <div className="flex flex-col ">
        <div className="p-4">
          <div className="flex gap-10 items-center">
            <Avatar className="w-20 h-20">
              <AvatarFallback style={{ fontSize: 20 }}>JD</AvatarFallback>
            </Avatar>
            <div className="flex gap-10">
              <Dialog>
                <DialogTrigger>
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-lg">4</span>
                    <span className="text-gray-500">Playlists</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    {" "}
                    <DialogTitle className="mb-3"> Playlists</DialogTitle>
                  </DialogHeader>
                  <div className="h-[300px] overflow-scroll ">
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-lg">300</span>
                    <span className="text-gray-500">Followers</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    {" "}
                    <DialogTitle className="mb-3"> Followers</DialogTitle>
                  </DialogHeader>
                  <div className="h-[300px] overflow-scroll ">
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-lg">320</span>
                    <span className="text-gray-500">Following</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    {" "}
                    <DialogTitle className="mb-3"> Following</DialogTitle>
                  </DialogHeader>
                  <div className="h-[300px] overflow-scroll ">
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                    <div className="h-16 bg-black w-full mt-2"></div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <p className="font-semibold mt-3" style={{ fontSize: 27 }}>
            {username}
          </p>
        </div>
        <div className="flex-1 p-4 pb-10">
          <div className="mt-5">
            <h2 className="text-lg font-semibold ">Playlists</h2>
            <div className="grid grid-cols-4 gap-5 mt-3">
              <PlaylistCard />
              <PlaylistCard />
              <PlaylistCard />
              <PlaylistCard />
              <PlaylistCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
