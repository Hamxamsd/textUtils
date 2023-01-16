import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to uppercase", "sucess");
  };

  const handleLoClick = () => {
    // console.log("Lowercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to lowercase", "sucess");

  };

  const handleClearClick = () => {
    // console.log("ClearText was clicked: " + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "sucess");

  };

                          //  const boldClick = () => {
                               
                          //     //  let newText = text;
                          //     setText({
                          //       // fontWeight: 'bold',
                          //       color: 'red'
                          //     });
                          //           };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);

  };


  // New function for copying text
  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "sucess");

  }

  // Handle Extra spaces
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "sucess");

  }

  const [text, setText] = useState("Enter text here");

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

      {/* <button className="btn btn-primary mx-1" onClick={boldClick}>Bold Text</button> */}
    
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
    </div>
    </>
  );
}
