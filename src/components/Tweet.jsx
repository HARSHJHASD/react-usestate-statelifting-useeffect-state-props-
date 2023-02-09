import React,{useEffect} from "react";
import "./Tweet.scss";


//imports components
const clicked = (props)=>{
  alert(`buttom got clicked ${props}`);
}
const Tweet = ({name,tweet,tweets,setTweets}) => {
  useEffect(()=>{
    alert("a tweet has been mounted (using useeffectr)");
  },[]);
const deleteTweet = () =>
{
  setTweets(tweets.filter((state)=>state.id!==tweet.id));
  };
  const content= "hi this is  my content for props"
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={()=>deleteTweet()}> Delete </button>
      <button  onClick={() =>clicked("mandeep")} > Like</button>
    </div>
  );
};

export default Tweet;
