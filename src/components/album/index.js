import React from "react";
import { TabTitle } from "../../utils/GeneralFunctions";
import Navbar from "../navbar";

function index() {
  TabTitle("Album");
  return (
    <div>
      <Navbar />
      <h1>Album</h1>
    </div>
  );
}

export default index;
