import React, { useState } from "react";
// import { ReactComponent as SearchIcon } from "../../../assets/icon-search.svg";
import searchIcon from "../../../assets/icon-search.svg";
import "./style.scss";

export default function Search() {
  const [value, setValue] = useState("");
  return (
    <div id="component-search">
      <img src={searchIcon} />
      <input
        value={value}
        onChange={() =>
          setValue(() => document.getElementById("component-search").value)
        }
      />
    </div>
  );
}
