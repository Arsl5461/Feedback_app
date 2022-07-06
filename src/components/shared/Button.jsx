import React from 'react'
import PropTypes from 'prop-types'
function Button({type,version,isDisabled,children}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )

}
Button.defaultProps={
    version:"primary",
    isDisabled:false,
    type:"button",

}
Button.propTypes={
    children:PropTypes.node.isRequired,
    version:PropTypes.string,
    type:PropTypes.string,
    isDisabled:PropTypes.bool,
}

export default Button

// import React from 'react'
// import PropTypes from 'prop-types'
// function Button({children,type,version,isDisabled}) {
//   return (
//     <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
// {children}
//     </button>
//   )
// }
// Button.defaultProps={
// version:'primary',
// type:'button',
// isDisabled:false
// }
// Button.propTypes={
//     children:PropTypes.node.isRequired,
//     version:PropTypes.string,
//     type:PropTypes.string,
//     isDisabled:PropTypes.bool,
// }

// export default Button