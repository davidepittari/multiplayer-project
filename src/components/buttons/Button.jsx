import React from 'react'

function Button(props) {
  return (
    <button className="bg-third text-white font-bold text-lg px-4 py-2 hover:bg-btnhover transition-all duration-300 text-center">{props.children}</button>
  )
}

export default Button