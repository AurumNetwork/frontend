import React from "react";
import "./style.scss";

export default function Package() {
  return (
    <div className="component-package">
      <div className="component-package-icon"></div>
      <div className="component-package-info">
        <div className="component-package-info-name">Package Name</div>
        <div className="component-package-info-version">v1.2.3</div>
      </div>
    </div>
  );
}
