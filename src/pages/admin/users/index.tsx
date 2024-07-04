import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Link, useNavigate } from "react-router-dom";
import { Detail } from "../../../icons";
import { Input } from "../../../components/ui/input";
import { DatePickerDemo } from "../datePicker";

const Users = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <div className="py-3">
      <h2 className="text-lg font-semibold ">Users</h2>
      <div className="py-5">
        <h2 className="text-md font-semibold ">Filter</h2>
        <div className="grid grid-cols-3 mt-3 gap-3">
          <Input name="username" placeholder="Username" />

          <Input name="name" placeholder="Name" />

          <Input name="email" placeholder="Email" />
        </div>
        <div className="grid grid-cols-3 mt-3 gap-3">
          {" "}
          <Input name="following" placeholder="Following" />
          <Input name="followers" placeholder="Followers" />
          <Input name="playlists" placeholder="Playlists" />
        </div>
        <div className="grid grid-cols-3 mt-3 gap-3">
          {" "}
          <Input name="followingPlaylists" placeholder="Following Playlists" />
          <DatePickerDemo placeholder="Min Register Date" />
          <DatePickerDemo placeholder="Max Register Date" />
        </div>
      </div>
      <div className=" mt-3">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Username</TableHead>
              <TableHead>Name</TableHead>

              <TableHead>Email</TableHead>
              <TableHead>Following</TableHead>
              <TableHead>Followers</TableHead>
              <TableHead>Playlists</TableHead>
              <TableHead>Following Playlists</TableHead>

              <TableHead className="text-center">Edit/Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array(10)
              .fill(0)
              .map(() => (
                <TableRow>
                  <TableCell>@username</TableCell>
                  <TableCell>John Doe</TableCell>

                  <TableCell>johndoe@gmail.com</TableCell>

                  <TableCell>
                    <div>
                      <Link to={"/admin/user/username1"}>@username1</Link>
                      <Link to={"/admin/user/username1"}>@username2</Link>...
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Link to={"/admin/user/username1"}>@username1</Link>
                      <Link to={"/admin/user/username1"}>@username2</Link>...
                    </div>
                  </TableCell>

                  <TableCell>
                    <div>
                      <Link to={"/admin/playlist/playlist1"}>Playlist1</Link>
                      <Link to={"/admin/playlist/playlist1"}>Playlist2</Link>...
                    </div>
                  </TableCell>

                  <TableCell>
                    <div>
                      <Link to={"/admin/playlist/playlist1"}>Playlist3</Link>
                      <Link to={"/admin/playlist/playlist1"}>Playlist4</Link>...
                    </div>
                  </TableCell>

                  <TableCell className=" ">
                    <div
                      className="cursor-pointer flex justify-center gap-3 items-center"
                      onClick={() => navigate("/admin/user/username1")}
                    >
                      <Detail />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
