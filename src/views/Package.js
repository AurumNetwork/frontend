import React from "react";
import { useLocation } from "react-router-dom";

export default function Main() {
  const location = useLocation();
  console.log(location.pathname.endsWith("/brett"));
  return <div>Test</div>;
}
