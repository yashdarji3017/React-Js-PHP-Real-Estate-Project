import React from 'react'

const Backsidebar = ({click,open}) => {
  return (
    <div className={open?"sidebar":"sidebar"} onClick={click}>
      
    </div>
  )
}

export default Backsidebar
