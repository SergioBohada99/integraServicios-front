import React from 'react'

function Emply_fab({setIsVisible}) {
    const handleAdd = () => {
        setIsVisible(true)
      }
  return (
    <div className="floating-container">
    <div className="floating-button">+</div>
    <div className="element-container">
      <span className="float-element" onClick={handleAdd}>
      <i class='bx bx-user-plus'></i>
      </span>
      <span className="float-element">
      <i class='bx bx-user-minus'></i>
      </span>
    </div>
  </div>
  )
}

export default Emply_fab