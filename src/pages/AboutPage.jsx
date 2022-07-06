import React from 'react'
import {Link} from "react-router-dom"

function AboutPage() {
  return (
    <>
    <div className="card">
        <h4>This is about page.</h4>
        <p>This is a react router dom example</p>
    </div>
    <Link to={{
        pathname:"/",
    }}
    >Back to Home </Link>
    </>
  )
}

export default AboutPage