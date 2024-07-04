/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { Button } from "../../../components/ui/button";
import { useEffect } from "react";

export function AdminLayout() {
  const menuler = [
    {
      name: "users",
      link: "users",
      icon: 'user',
      links: ["users", "user"],
      submenus: [],
    },
    {
      name: "playlists",
      link: "playlists",
      icon: 'list',
      links: ["playlists", "playlist"],
      submenus: [],
    },
    {
      name: "videos",
      link: "videos",
      icon: 'play',
      links: ["videos", "video"],
      submenus: [],
    },
    {
      name: "ads",
      link: "ads",
      icon: 'rectangle-ad',
      links: ["ads", "ad"],
      submenus: [],
    },
    {
      name: "settings",
      link: "settings",
      icon: 'gear',
      links: ["settings"],
      submenus: [],
    },
  ];

  const navigate = useNavigate();

  const { pathname } = useLocation();
  const path = pathname.split("/")[2];

  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  return (
    <div className="flex  h-full ">
      <div className={cn("pb-12", "border-r")} style={{ minWidth: 300 }}>
        <div className="space-y-4 py-4">
          <div className="px-4 py-2">
            <h2
              className="mb-2 px-2 text-lg font-semibold tracking-tight cursor-pointer"
              onClick={() => navigate("/admin")}
            >
              Admin Panel
            </h2>
            <div className="space-y-1">
              {menuler.map((item) => (
                <div className={path === item.link ? "" : ""}>
                  <Button
                    variant={item.links.includes(path) ? "secondary" : "ghost"}
                    size="sm"
                    className="w-full justify-start capitalize"
                    onClick={() => navigate(item.link)}
                  >
                    <div className="flex w-full gap-3">
                      <span>
                        <i className={"fa-solid fa-" + item.icon}></i>
                      </span>
                      {item.name}{" "}
                    </div>
                  </Button>
                  {item.submenus.length > 0 && path === item.link && (
                    <div className="flex flex-col p-2">
                      {item.submenus.length > 0 &&
                        item.submenus.map((item2: any) => (
                          <Button
                            variant={
                              pathname.split("/")[3] === item2.link
                                ? "secondary"
                                : "ghost"
                            }
                            size="sm"
                            className="w-full justify-start capitalize"
                            onClick={() =>
                              navigate(item.link + "/" + item2.link)
                            }
                          >
                            {item2.name}
                          </Button>
                        ))}
                    </div>
                  )}
                </div>
              ))}
              <Button
                variant={"ghost"}
                size="sm"
                className="w-full justify-start gap-3 capitalize"
                onClick={() => navigate("/")}
              >
                <i className="fa-solid fa-right-from-bracket"></i>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}
