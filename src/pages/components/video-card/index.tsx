import React from "react";

import { AspectRatio } from "../../../components/ui/aspect-ratio";
import { useNavigate } from "react-router-dom";

import { Play } from "../../../icons";
 

const VideoCard = () => {
  const navigate = useNavigate();
  return (
    <div className="videocard w-full relative">
      <div
        className="w-full cursor-pointer "
        onClick={() => navigate("/video/title1")}
      >
        <AspectRatio
          ratio={4 / 3}
          className="overflow-hidden hover:rounded-none"
        >
          <img
            src="/img/view-3d-cinema-film-reel.jpg"
            alt="Image"
            className="rounded-md object-cover"
          />{" "}
          <div className="playall absolute top-0 left-0 w-full h-full bg-black/50 ">
            <div className="w-full h-full uppercase gap-3 flex justify-center items-center font-semibold text-lg">
              <Play /> Play 
            </div>
          </div>
        </AspectRatio>

        <div>
          <p className="mt-2 font-semibold">Video Aciklama</p>
          <p className="text-sm text-gray-600">
            244.387 görüntüleme 3 Oca 2023
          </p>
        </div>
      </div>
      <div className="absolute bottom-1 right-1">
      
      </div>
    </div>
  );
};

export default VideoCard;
