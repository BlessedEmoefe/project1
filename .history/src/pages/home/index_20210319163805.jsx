import React,{useState,useEffect} from 'react';
import {HomeStyles} from './styles'

const Home = () => {
  const [timer,setTimer] =useState(null)
  useEffect(() => {
    setTimeout(() => {
     setTimer
   },1000)
    return () => {
      cleanup
    }
  }, [input])
  return (
    <HomeStyles>
      <div className="header">
        <h1>My GitHub Genesis</h1>
        <div className="timer">
          <p>{time}</p>
        </div>
      </div>
    </HomeStyles>
  );
}

export default Home

