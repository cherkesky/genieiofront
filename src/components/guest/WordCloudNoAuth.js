import "d3-transition";
import { select } from "d3-selection";
import React from "react";
import ReactWordcloud from "react-wordcloud";
// import { useHistory } from 'react-router-dom' 
// const history = useHistory()

// import words from "./words";     // enable for using the words fixture file

export default function WordCloud(props){

  const getCallback =(callback)=> {

    return function(word, event) {
      const isActive = callback !== "onWordMouseOut";
      const element = event.target;
      const text = select(element);
      text
        .on("click", () => {
          if (isActive) {
          // props.history.push('/grants')
          // let keyword=event.target.innerHTML
          // props.history.push(`/grants?search=${keyword}`)  
          console.log("Click")
        }
        })
        .transition()
        .attr("background", "363636")
        .attr("font-size", isActive ? "300%" : "100%")
        .attr("text-decoration", isActive ? "underline" : "None");
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
  
  return (
    <>
      <div style={{ height: 800, width: "100%", backgroundColor: "#363636" }}>

        {/* // enable below for using the words fixture file */}
        {/* <ReactWordcloud callbacks={callbacks} words={words} /> */} 
        {/* // enable above for using the words fixture file */}

        {/* // disable below for using the words fixture file */}
        <ReactWordcloud
         callbacks={callbacks} 
         words={props.word_values} 
         {...props}
         />    
        {/* // disable above for using the words fixture file */}

      </div>
    </>
  )
}