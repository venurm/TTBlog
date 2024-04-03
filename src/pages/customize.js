import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AxiosMockupGET } from "../utilities/axioscall";
import { AK } from "../constants/AppKeys";

// import Uppy from "@uppy/core";
// import { Dashboard } from "@uppy/react";
import CanvasContainer from "./CanvasContainer";
// Don't forget the CSS: core and the UI components + plugins you are using.
// import "@uppy/core/dist/style.min.css";
// import "@uppy/dashboard/dist/style.min.css";
import "./styles.css";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Customize() {
  // const uppy = new Uppy();

  return <CanvasContainer />;
}
