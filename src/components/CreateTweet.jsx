import React,{useState} from "react";
import {v4 as uuidv4} from "uuid";
//imports components



const CreateTweet = ({tweets,setTweets,textInput,changeTextInput}) => {
  //from here we have moved our state variables etc to app.js and lifted them
  const userInputHandler =(e)=>{
    changeTextInput(e.target.value);
  }
  const submitTweetHandler = (e) =>
  {
    //this will prevent reloading of page..
    e.preventDefault();

    setTweets([...tweets,{ message : textInput, id:uuidv4() }]);
    changeTextInput("")
  }
  return (
    <div className="Createtweet">
      <form onSubmit={submitTweetHandler}>
        <p>Write your Tweet Below:</p>
        <textarea value={textInput} onChange={userInputHandler} cols="30" rows ="10">
        </textarea>
        <h1 onClick={()=>changeTextInput("")}>{textInput}</h1>
        <button >Submit</button>
      </form>
    </div>
  );
};

export default CreateTweet;
