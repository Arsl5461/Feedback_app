import React from 'react'
import PropTypes from 'prop-types'
import AboutPage from '../pages/AboutPage'
import {Link} from "react-router-dom"
const Header = ({text,backgroundColor,textColor}) => {
    const headerStyles={
        backgroundColor:backgroundColor,
        color:textColor,
    }
  return (
<header style={headerStyles}>
<div className='container'>


<h1>{text}</h1>
<Link to={{
  pathname:"/about"
}}>About Page</Link>
</div>
</header>
  )
}
Header.defaultProps={
    text:"FeedBack UI",
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95',
}
Header.propTypes={
    text:PropTypes.string.isRequired,
    bgColor:PropTypes.string,
    textColor:PropTypes.string
  }

export default Header