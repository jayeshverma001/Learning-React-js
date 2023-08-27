import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }

    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handlecopy = () =>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const[text,setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode===`dark`?`white`:`#042743`}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode===`dark`?`#13466e`:`white`,color:props.mode===`dark`?`white`:`042743`}} id="myBox" rows="8"></textarea>
    </div>
    <butoon className="btn btn-primary mx-2 my-2" onClick = {handleUpClick}>Convert to Uppercase</butoon>
    <butoon className="btn btn-primary mx-2 my-2" onClick = {handleLoClick}>Convert to Lowercase</butoon>
    <butoon className="btn btn-primary mx-2 my-2" onClick = {handleClearClick}>Clear Text</butoon>
    <butoon className="btn btn-primary mx-2 my-2" onClick = {handlecopy}>Copy Text</butoon>
    <butoon className="btn btn-primary mx-2 my-2" onClick = {handleExtraSpaces}>Remove Extra spaces</butoon>
    </div>
    <div className="container my-3" style={{color:props.mode===`dark`?`white`:`#042743`}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above  to preview it here"}</p>
    </div>
    </>
  )
}
