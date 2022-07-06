import React, { useState,useEffect} from 'react'
import Card from './shared/Card'
import RatingForm from './RatingForm';
import Button from './shared/Button'
import {useContext} from "react"
import FeedBackContext from '../context/FeedBackContext';
function FeedbackForm() {
    const {handleAdd,feedbackEdit,updateFeedback}=useContext(FeedBackContext)
    const [text,setText]=useState("");
    const [rating,setRating]=useState(10);
    const [isDisabled,setIsDisabled]=useState(true);
    const [message,setMessage]=useState("")

    
    useEffect(()=>{
        if(feedbackEdit.edit === true){

            setIsDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }

    },[feedbackEdit])
    const handleEventChange=(e)=>{
        if(text === ""){
            setIsDisabled(true);
            setMessage(null)
        }
        else if(text !== "" && text.trim().length <=10 ){
            setIsDisabled(true);
            setMessage("Text must be atleast 10 characters")
        }
        else{
            setIsDisabled(false);
            setMessage(null)
        }
        setText(e.target.value);
    }
    const handleSubmit=(e)=>{
e.preventDefault();
if(text.trim().length>10){
    const newFeedback={
        text,
        rating
    }
    if(feedbackEdit.edit === true){
updateFeedback(feedbackEdit.item.id,newFeedback)
    }else{

        handleAdd(newFeedback);
    }
    setText("")
    setRating(1)
    setIsDisabled(true)
    
}
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
        <h4>How would you rate our service with you?</h4>
        <RatingForm select={(rating)=>setRating(rating)}/>
        <div className='input-group'>
            <input type="text" placeholder='Write a review' onChange={handleEventChange} value={text} />
            <Button type="submit" version="secondary" isDisabled={isDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm