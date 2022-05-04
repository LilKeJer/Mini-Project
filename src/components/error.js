import React from "react";
import { TabTitle } from "../utils/GeneralFunctions";

function error() {
  TabTitle("Error");
  return (
    <div>
      <h1>404 Under Construction</h1>
    </div>
  );
}

export default error;
