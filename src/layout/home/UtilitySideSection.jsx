//REACT
import React from 'react'

//UTILITY
import {Surveys} from "./utility/Utility";

function UtilitySideSection() {
  return (
    <div className="hidden lg:flex w-1/2 h-fit bg-primary">
        <Surveys/>
    </div>
  )
}

export default UtilitySideSection