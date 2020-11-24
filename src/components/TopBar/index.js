import React from "react";
import { useLocation } from "react-router-dom";
import "./style.scss";

export default function Topbar() {
  const pathname = useLocation().pathname;

  return (
    <div id="topbar">
      <div id="topbar-logo">SC</div>
      <div id="topbar-links">
        <a
          href="/"
          className={
            "topbar-link " + (pathname == "/" ? "topbar-link-selected " : "")
          }
        >
          Home
        </a>
        <a
          href="/test"
          className={
            "topbar-link " +
            (pathname == "/test" ? "topbar-link-selected " : "")
          }
        >
          Upload
        </a>
      </div>
    </div>
  );
}
