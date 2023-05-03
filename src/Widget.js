import React from "react";
import "./Widget.css";
import { FiberManualRecord, Info } from "@mui/icons-material";
function Widget() {
    const newArticle = (heading, subtitle) => {
        return (
            <div className="wideget-article">
                <div className="article-left">
                    <FiberManualRecord></FiberManualRecord>
                </div>
                <div className="widget-right">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="widget">
            <div className="widget-header">
                <h2>Linkedln News</h2>
                <Info></Info>
            </div>
            {newArticle("HTML", "What is HTML")}
            {newArticle("CSS", "What is CSS")}
            {newArticle("JS", "What is JS")}
        </div>
    );
}

export default Widget;
