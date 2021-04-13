import React from "react";
import SearchItem from "./SearchItem";
import Category from "./Category";
import "../styling/MainContent.css";

function MainContent() {
  return (
    <div className="main-content">
      <Category />
      <SearchItem />
    </div>
  );
}
export default MainContent;
