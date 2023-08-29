//REACT
import React from 'react'

//COMPONENT
import Button from '../../../components/buttons/Button';

//IMG
import imgLocal from "../../../assets/img/frost-planet-concept-art.jpeg";

//ICON
import { Checkbox } from '../../../components/svg/miscellaneous/Miscellaneous';

const Surveys = (props,{img }) => {
  return (
    <section className="flex flex-col m-2 bg-sixth p-2 font-bold">
      <div className="flex flex-row justify-between fill-third">
        <span className="text-third text">SONDAGGI</span>
        <Checkbox height={"1.5em"}/>
      </div>
      <img className="w-full h-24 object-cover object-center my-2" src={imgLocal} alt="img"></img>
      <span className="text-white mb-2">{props.children}</span>
      <Button>VOTA</Button>
    </section>
  )
}

export default Surveys