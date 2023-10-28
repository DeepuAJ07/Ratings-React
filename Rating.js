import React, { useState } from 'react'
import {AiOutlineStar } from "react-icons/ai";
import "./Rating.css";

function Rating() {

  const[s1,sets1]=useState(false)
  const[s2,sets2]=useState(false)
  const[s3,sets3]=useState(false)
  const[s4,sets4]=useState(false)
  const[s5,sets5]=useState(false)

  const Handles1=()=>{
    if(s1){
      sets1(false)
      sets2(false)
      sets3(false)
      sets4(false)
      sets5(false)
    }
    else{
sets1(true)
    }
  }

  const Handles2=()=>{
    if(s2){
      sets2(false)
      sets3(false)
      sets4(false)
      sets5(false)
    }
    else{
sets1(true);sets2(true);
    }
  }

  
  const Handles3=()=>{
    if(s3){
      sets3(false)
      sets4(false)
      sets5(false)
    }
    else{
sets1(true);sets2(true);sets3(true);
    }
  }

  const Handles4=()=>{
    if(s4){
      sets4(false)
      sets5(false)
    }
    else{
sets1(true);sets2(true);sets3(true);sets4(true);
    }
  }

  const Handles5=()=>{
    if(s5){
      sets5(false)
    }
    else{
sets1(true);sets2(true);sets3(true);sets4(true);sets5(true)
    }
  }

  return (

<div>
      <div className={s1&&"bg"} onClick={Handles1}>  <AiOutlineStar/></div>
      <div className={s2 && "bg"} onClick={Handles2}>  <AiOutlineStar/></div>
      <div className={s3&&'bg'} onClick={Handles3}>  <AiOutlineStar/></div>
      <div className={s4&&'bg'} onClick={Handles4}>  <AiOutlineStar/></div>
      <div className={s5 &&'bg'} onClick={Handles5}>  <AiOutlineStar/></div>
        
        
    </div>
  )
}

export default Rating