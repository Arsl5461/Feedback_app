import { createContext,useState } from "react";
import {v4 as uuidv4} from "uuid"

const FeedBackContext = createContext()

export const FeedBackProvider=({children})=>{

    // Start of the global State
const [feedback,setFeedback]=useState([
    {
        id:1,
        text:"This is from context",
        rating:10
    },
    {
        id:2,
        text:"This is from context2",
        rating:8
    },
    {
        id:3,
        text:"This is from context3",
        rating:7
    },
])
const [feedbackEdit,setEditFeedBack]=useState({
item:{},
edit:false,
})
// Add Feedback
const handleAdd=(newFeedback)=>{
    newFeedback.id=uuidv4();
    setFeedback([newFeedback,...feedback])
        }

        // Delete feedback
const handleDelete=(id)=>{
    if(window.confirm("Are you sure you want to delete?")){

        setFeedback(feedback.filter((item)=>item.id !== id))
    }
  }

  // Edit Feedback
  const editFeedback=(item)=>{
setEditFeedBack({
        item,
        edit:true,
    })
  }
  // Update Feedback
  const updateFeedback=(id,updItem)=>{
setFeedback(feedback.map((item)=>(item.id === id ? {...item,...updItem}  : item))
)   
  }

  // Start of the provider
    return <FeedBackContext.Provider value={{
feedback,
handleDelete,
handleAdd,
editFeedback,
feedbackEdit,
updateFeedback

    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext