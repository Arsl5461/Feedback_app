import React from 'react'
import { FaTimes,FaEdit } from "react-icons/fa"
import { useState,useContext } from 'react'
import FeedBackContext from '../context/FeedBackContext'
import Card from './shared/Card'

const FeedBackItem = ({item}) => {
  const {handleDelete,editFeedback}=useContext(FeedBackContext)
const [reverse] = useState(true)


  return (

    <Card reverse={reverse}>
        <div className='num-display'>{item.rating}</div>
        <button className='close' onClick={()=>handleDelete(item.id)}>
        <FaTimes color="purple"/>
        </button>
        <button className='edit' onClick={()=>editFeedback(item)}>
        <FaEdit color="purple"/>
        </button>
        
        <div className='text-display'>{item.text}</div>
        
    </Card>


  )
}

export default FeedBackItem