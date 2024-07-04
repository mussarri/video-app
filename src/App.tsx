import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./pages/admin/adminHome";
import { AdminLayout } from "./pages/admin/adminLayout";
import Users from "./pages/admin/users";
import Playlists from "./pages/admin/playlists";
import Videos from "./pages/admin/videos";
import Nopage from "./pages/nopage";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Ads from "./pages/admin/ads";
import UserDetail from "./pages/admin/userDetail";
import PlaylistDetail from "./pages/admin/playlistDetail";
import VideoDetail from "./pages/admin/videoDetail";
import VideoPage from "./pages/videopage";
import PlaylistPage from "./pages/playlistpage";
import { ProfileLayout } from "./pages/profille/profileLayout";
import ProfileHome from "./pages/profille/profilehome";
import ProfilePlaylists from "./pages/profille/profilePlaylists";
import User from "./pages/user";
import AdminSettings from "./pages/admin/adminSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />{" "}
          <Route path="video/:title" element={<VideoPage />} />
          <Route path="playlist/:name" element={<PlaylistPage />} />
          <Route path="user/:username" element={<User />} />
          <Route path="*" element={<Nopage />} />
        </Route>
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<ProfileHome />} />{" "}
          <Route path="playlists" element={<ProfilePlaylists />} />
          <Route path="*" element={<Nopage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="users" element={<Users />} />
          <Route path="playlists" element={<Playlists />} />
          <Route path="videos" element={<Videos />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="user/:username" element={<UserDetail />} />
          <Route path="playlist/:name" element={<PlaylistDetail />} />
          <Route path="video/:title" element={<VideoDetail />} />
          <Route path="ads" element={<Ads />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
