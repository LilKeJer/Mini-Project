import React from "react";
import { TabTitle } from "../../utils/GeneralFunctions";
import Navbar from "../navbar";

function index() {
  TabTitle("Tour");
  return (
    <div>
      <Navbar />
      <h1>tour</h1>
    </div>
  );
}

export default index;
