import React, { useEffect } from "react";
import { Avatar, AvatarFallback } from "../../../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";

import { Input } from "../../../components/ui/input";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname]);
  return (
    <header className="border-b">
      <div className="w-full h-full max-width flex justify-between items-center px-5 ">
        <Link to={"/"} className="logo">
          LOGO
        </Link>

        <div className="avatar flex gap-2">
          <div className="search">
            <Input placeholder="Ara" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/profile/lastvideos")}>
                Last Videos
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/profile/playlists")}>
                Playlists
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/profile/favourites")}>
                Favourites
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
