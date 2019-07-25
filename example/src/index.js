import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import DropzoneDialogExample from "./DropzoneDialogExample";
import DropzoneAreaExample from "./DropzoneAreaExample";
ReactDOM.render(
  <DropzoneAreaExample hideIcon={true} />,
  document.getElementById("root")
);
