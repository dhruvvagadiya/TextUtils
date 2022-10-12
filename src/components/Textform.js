
import React, { useState } from 'react'

export default function Textorm(props) {

  const [text, changeText] = useState('');

  const changetext = (event) => {
    // console.log("On change");
    changeText(event.target.value);
  }

  const toUpper = () => {
    // console.log("To upper");
    changeText(text.toUpperCase());
    props.alert("Converted to Uppercase", "success");
  }

  const toLower = () => {
    changeText(text.toLowerCase());
    props.alert("Converted to lowercase", "success");
  }

  const toCapitalized = () => {
    let arr = text.split(" ");
    let a = ""; 
    for (let index = 0; index < arr.length; index++) {
      let str = arr[index];
      let res = str.replace(str.charAt(0), str.charAt(0).toUpperCase());
      a = a + res + " ";
    }
    // console.log(a);
    changeText(a.substring(0, a.length-1));
    props.alert("Converted to Capitalized form", "success");

  }

  const toalternating = ()=>{
    let arr = text.split(" ");
    let a = "";

    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
      let f = 1;
      let ans = "";

      for (let j = 0; j < word.length; j++) {

        if(f === 1) {
          ans += word.charAt(j).toUpperCase();
          f=0;
        }
        else{
          ans += word.charAt(j).toLowerCase();
          f = 1;
        }
      }

      a =  a + ans + " ";
    }

    changeText(a.substring(0, a.length-1));
    props.alert("Converted to Alternating form", "success");


  }

  const handleclear = () => {
    changeText("");
  }


  const countWords = (line) => {
    const arr = line.split(/\s+/);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] !== "") count++;
      
    }
    return count;
  }

  const handlecopy = () =>  {
    navigator.clipboard.writeText(text);
    props.alert("Text copied to clipboard!", "success");
  }

  return (
    <>
    <div className="mb-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
      <h2>{props.title}</h2>
      <textarea className="form-control" style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} onChange={changetext} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>

    <div className="container">
      <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={toUpper}>UPPERCASE</button>
      <button disabled={text.length === 0} className= 'btn btn-primary mx-2 my-2' onClick={toLower}>lowercase</button>
      <button disabled={text.length === 0} className= 'btn btn-primary mx-2 my-2' onClick={toCapitalized}>Capitalized Text</button>
      <button disabled={text.length === 0} className= 'btn btn-primary mx-2 my-2' onClick={toalternating}>aLtErNaTiNg</button>
      <button disabled={text.length === 0} className= 'btn btn-primary mx-2 my-2' onClick={handlecopy}>Copy</button>
      <button disabled={text.length === 0} className= 'btn btn-primary mx-2 my-2' onClick={handleclear}>Clear</button>
    </div>

    <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>Insert Text Summary</h1>
      <p>There are {countWords(text)} words and {text.length} characters <br />
      Reading time : {0.008*countWords(text)} minutes</p>

      <h2>Preview Text</h2>
      <p>{text.length>0?text: 'Nothing to preview!'}</p>
    </div>

    </>
  )
}
