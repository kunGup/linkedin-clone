import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./Widget.css";
function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget_article">
      <div className="widgets_articleleft">
        <FiberManualRecord />
      </div>

      <div className="widgets_articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("Coronavirus: Delhi update", "Top news - 324 readers")}
      {newsArticle("Bitcoin hits new high", "Top news - 2,324 readers")}
    </div>
  );
}

export default Widget;
