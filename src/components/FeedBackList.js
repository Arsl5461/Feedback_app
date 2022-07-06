import React from 'react'
import {motion,AnimatePresence} from "framer-motion"
import FeedBackItem from './FeedBackItem'
import FeedBackContext from '../context/FeedBackContext'
import { useContext } from 'react'



const FeedBackList = ({handleDelete}) => {
  const {feedback}=useContext(FeedBackContext)
    if(!feedback || feedback.length===0){
        return <p>No FeedBackData</p>
    }

  return (
    <>
    <AnimatePresence>
    {feedback.map((item)=>(
      <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <FeedBackItem key={item.id} item={item} />
        </motion.div>
    ))}
</AnimatePresence>
</>
  )
}
export default FeedBackList