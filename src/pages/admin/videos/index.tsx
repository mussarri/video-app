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
import { Button } from "../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Checkbox } from "../../../components/ui/checkbox";
import { Pen, Trash } from "../../../icons";
import { useNavigate } from "react-router-dom";
import { DatePickerDemo } from "../datePicker";

const CheckboxCategory = () => (
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" />
    <label
      htmlFor="terms"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      1
    </label>
  </div>
);

const Videos = () => {
  const navigate = useNavigate();
  const deleteVideo = (id: string) => {
    alert("are you sure");
  };
  return (
    <div className="py-3">
      <div className="flex items-start justify-between">
        <h2 className="text-lg font-semibold ">Videos</h2>
        <Dialog>
          <DialogTrigger>
            <Button size={"sm"} variant="outline">
              Add Video
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-3"> Add Video</DialogTitle>

              <div className="flex flex-col gap-3 my-2">
                <Input type="text" placeholder="Title" />
                <Textarea placeholder="Description" />
                <Input type="text" placeholder="Link" />
                <Input type="text" placeholder="Thumbnail" />
                <div>
                  <div className="flex my-2 gap-3 px-1">
                    <p className="text-gray-500 text-sm">Categories:</p>
                    <CheckboxCategory />
                    <CheckboxCategory />
                    <CheckboxCategory />
                    <CheckboxCategory />
                  </div>
                </div>
              </div>

              <Button style={{ marginTop: 15 }}>Add</Button>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="py-5">
        <h2 className="text-md font-semibold ">Filter</h2>
        <div className="grid grid-cols-3 mt-3 gap-3">
          <Input name="title" placeholder="Title" />

          <Input name="description" placeholder="Description" />

          <Input name="link" placeholder="Link" />
        </div>
        <div className="grid grid-cols-3 mt-3 gap-3">
          {" "}
          <Input name="categories" placeholder="Categories" />
          <DatePickerDemo placeholder="Min Created Date" />
          <DatePickerDemo placeholder="Max Created Date" />
        </div>
      </div>
      <div className=" mt-3">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Link</TableHead>
              <TableHead>Thumbnail</TableHead>
              <TableHead className="text-right">Categories</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Edit/Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array(10)
              .fill(0)
              .map(() => (
                <TableRow>
                  <TableCell>Video Basligi</TableCell>
                  <TableCell>
                    {" Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ea, labore?".slice(
                      0,
                      50
                    ) + "..."}
                  </TableCell>
                  <TableCell>
                    https://www.youtube.com/watch?c=m3kpsk21
                  </TableCell>
                  <TableCell>
                    <div className="w-16 h-16 bg-black"></div>
                  </TableCell>
                  <TableCell className="text-center">1,2,3</TableCell>
                  <TableCell>11.11.2023</TableCell>
                  <TableCell>
                    {" "}
                    <div className="flex gap-3">
                      <div
                        className="cursor-pointer"
                        onClick={() => navigate("/admin/video/video1")}
                      >
                        <Pen />
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => deleteVideo("id")}
                      >
                        <Trash />
                      </div>
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

export default Videos;
