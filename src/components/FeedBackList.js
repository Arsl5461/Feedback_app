import React from 'react'
import {motion,AnimatePresence} from "framer-motion"
import FeedBackItem from './FeedBackItem'
import FeedBackContext from '../context/FeedBackContext'
import { useContext } from 'react'
import Spinner from './shared/Spinner'



const FeedBackList = ({handleDelete}) => {
  const {feedback,isLoading}=useContext(FeedBackContext)
    if(!isLoading && (!feedback || feedback.length===0)){
        return <p>No FeedBackData</p>
    }
    return isLoading?(
      <Spinner/>
    ):(
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