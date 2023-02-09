import React from "react";
import Tweet from "./Tweet";

export const TweetList = ({tweets,name,setTweets}) => {
  return (
    <div>
      {tweets.map((tweet)=> <Tweet 
      setTweets={setTweets} 
      name={name} 
      tweets={tweets} 
      tweet={tweet}
      key={tweet.id}/>)
  }</div>
  );
};


export default TweetList;