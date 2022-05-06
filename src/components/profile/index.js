import React from "react";
import { TabTitle } from "../../utils/GeneralFunctions";
import Navbar from "../navbar";

function index() {
  TabTitle("Profile");
  return (
    <div>
      <Navbar />
      <h1>Profile</h1>
    </div>
  );
}

export default index;
