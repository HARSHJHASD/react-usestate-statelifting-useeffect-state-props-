import React,{useState,useEffect} from "react";
import CreateTweet from "./components/CreateTweet";
import  TweetList  from "./components/TweetList";
const App=()=>{
 //these are the states we have moved here after lifting them up from "TweetList" .. this is called lifting of states to higher level or to parent component
  const [textInput,changeTextInput] = useState("");
  const [tweets,setTweets] = useState([]);
  const [name,setName] = useState(' click for new name using state');
  //this runs when first app component is  mounted . //or we can say this runs when tweets state changes.....
  useEffect(()=>{
    alert("app.js has been rendwered again(useeffect) .");
  },[tweets]);
  const sayHelloHandlwer = (e) =>
  {
   setName('this is changed due to react')
  }
  return(
    <>
    <h1 onClick={sayHelloHandlwer}>{name}</h1>
    <CreateTweet textInput={textInput} 
    tweets={tweets} 
    changeTextInput={changeTextInput} 
    setTweets={setTweets}/>
    <TweetList name={name} tweets={tweets} setTweets = {setTweets}/>
    <button onClick={()=>setName("button is clicked")}>click to change state</button>
    </>
  )
}
export default App;
