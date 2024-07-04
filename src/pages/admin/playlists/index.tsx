/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { Pen, Trash } from "../../../icons";
import { Input } from "../../../components/ui/input";
import { DatePickerDemo } from "../datePicker";

const Playlists = () => {
  const navigate = useNavigate();
  const deletePlaylist = (id: string) => {
    alert("are you sure");
  };
  return (
    <div className="py-3">
      <h2 className="text-lg font-semibold ">Playlists</h2>
      <div className="py-5">
        <h2 className="text-md font-semibold ">Filter</h2>
        <div className="grid grid-cols-3 mt-3 gap-3">
          <Input name="title" placeholder="Title" />

          <Input name="user" placeholder="User" />
          <Input name="Followers" placeholder="Followers" />

        </div>
        <div className="grid grid-cols-3 mt-3 gap-3">
          <DatePickerDemo placeholder="Min Created Date" />
          {" "}
          <DatePickerDemo placeholder="Max Created Date" />
        </div>
      </div>
      <div className=" mt-3">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Followers</TableHead>
              <TableHead>Videos</TableHead>

              <TableHead className="text-center">Edit/Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array(10)
              .fill(0)
              .map(() => (
                <TableRow>
                  <TableCell>Playlist Basligi</TableCell>
                  <TableCell>@username</TableCell>
                  <TableCell>@username1, @username1...</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Link to={"/admin/video/video1"}>Video1</Link>
                      <Link to={"/admin/video/video1"}>Video2</Link>
                      ...
                    </div>
                  </TableCell>

                  <TableCell className="flex justify-center gap-3 ">
                    <div
                      className="cursor-pointer"
                      onClick={() => navigate("/admin/playlist/playlist1")}
                    >
                      <Pen />
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => deletePlaylist("id")}
                    >
                      <Trash />
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

export default Playlists;
