import { createContext,useState,useEffect } from "react";


const FeedBackContext = createContext()

export const FeedBackProvider=({children})=>{

    // Start of the global State
    const [isLoading,setIsLoading]=useState(true)
const [feedback,setFeedback]=useState([])
const [feedbackEdit,setEditFeedBack]=useState({
item:{},
edit:false,
})
useEffect(()=>{
fetchFeedback()
},[])

// Fetch Feedback
const fetchFeedback=async()=>{
    const response = await fetch(`/feedback`)
    const data=await response.json()
    setFeedback(data)
    setIsLoading(false)
}



// Add Feedback
const handleAdd=async (newFeedback)=>{
    const response = await fetch('/feedback',{
        method:'POST',
        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify(newFeedback)

    })
    const data = await response.json()
    setFeedback([data,...feedback])
        }

        // Delete feedback
const handleDelete= async (id)=>{
    if(window.confirm("Are you sure you want to delete?")){
await fetch(`/feedback/${id}`,{method:'DELETE'})

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
  const updateFeedback=async (id,updItem)=>{
    const response = await fetch (`/feedback/${id}`,{
        method:'PUT',
        headers:{
            'Content-type':'application/json',
        },
        body: JSON.stringify(updItem)
    })
    const data = await response.json()
setFeedback(feedback.map((item)=>(item.id === id ? {...item,...data}  : item))
)   
  }

  // Start of the provider
    return <FeedBackContext.Provider value={{
feedback,
handleDelete,
isLoading,
handleAdd,
editFeedback,
feedbackEdit,
updateFeedback

    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext