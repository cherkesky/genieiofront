import "d3-transition";
import { select } from "d3-selection";
import React from "react";
import ReactWordcloud from "react-wordcloud";

import words from "./words";

const getCallback =(callback)=> {
  return function(word, event) {
    const isActive = callback !== "onWordMouseOut";
    const element = event.target;
    const text = select(element);
    text
      .on("click", () => {
        if (isActive) {
          window.open(`https://duckduckgo.com/?q=${word.text}`, "_blank");
        }
      })
      .transition()
      .attr("background", "363636")
      .attr("font-size", isActive ? "300%" : "100%")
      .attr("text-decoration", isActive ? "underline" : "none");
  };
}

const callbacks = {
  getWordColor: word => (word.value > 50 ? "Fuchsia" : "purple"),
  getWordTooltip: word =>
    `The word "${word.text}" appears ${word.value} times.`,
  onWordClick: getCallback("onWordClick"),
  onWordMouseOut: getCallback("onWordMouseOut"),
  onWordMouseOver: getCallback("onWordMouseOver")
};

export default function WordCloud(props){

  return (
    <>
      <div style={{ height: 650, width: 800, backgroundColor: "#363636" }}>
        <ReactWordcloud callbacks={callbacks} words={words} />
        {/* <ReactWordcloud callbacks={callbacks} words={props.word_values} />          */}
      </div>
    </>
  )
}