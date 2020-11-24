import React from "react";
import { Package, Search } from "../../components";
import "./style.scss";

export default function Home() {
  return (
    <div id="home">
      <div id="home-hero">
        <div id="home-hero-text">
          <div id="home-hero-text-title">SourceCode</div>
          <div id="home-hero-text-subtitle">A distributed package manager</div>
        </div>
      </div>
      <Search />
      <div id="home-search"></div>
      <div id="home-packages">
        <div className="home-packages-package-row">
          New
          <Package />
          <Package />
          <Package />
          <Package />
        </div>
        <div className="home-packages-package-row">
          Popular
          <Package />
          <Package />
          <Package />
          <Package />
        </div>
        <div className="home-packages-package-row">
          Active
          <Package />
          <Package />
          <Package />
          <Package />
        </div>
      </div>
    </div>
  );
}
