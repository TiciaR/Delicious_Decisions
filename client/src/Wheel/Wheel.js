import React, { Component } from 'react'
 
import {WheelComponent} from "./index"
// import 'react-wheel-of-prizes/dist/index.css'
import {foodChoice} from "../Data/FoodData.js"



const Wheel = () => {
  const segments = foodChoice.map(e=>e.choice)
  const seg_colors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#e03da5",
    "#34A24F",
    "#F9AA1F",
    "#3f3fec",
    "#FF9000",
    "#3DA5E0",
    "#34A24F",
  
    
  ];
  const onFinished = (winner) => {
    console.log(winner);
  }
  return (
  <div className="text-center " style={{marginLeft:"20%"}}>
    <WheelComponent
  style={{paddingTop:"10px",marginLeft:"50%", paddingLeft:"10px", paddingRight:"10px", paddingBottom:"10px"}}
  segments = {segments}
  seg_colors = {seg_colors} 
  winning_segment ='won 10'
  onFinished={(winner)=>onFinished(winner)}
  primaryColor='black'
  contrastColor='white'
  buttonText='Spin'/>
  </div>)
  
}

export default Wheel;