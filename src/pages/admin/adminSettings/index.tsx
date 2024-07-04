import React from "react";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

const AdminSettings = () => {
  return (
    <div className="py-3">
      <h2 className="font-semibold text-lg">Settings</h2>
      <div className="mt-5 flex items-center gap-3 max-w-[400px]">
        <Label htmlFor="file">Logo:</Label>
        <Input type="file" id="file" />
      </div>
    </div>
  );
};

export default AdminSettings;
