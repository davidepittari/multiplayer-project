//REACT
import React from 'react'

//COMPONENT
import Button from '../../../components/buttons/Button';

//IMG
import imgLocal from "../../../assets/img/frost-planet-concept-art.jpeg";

const Surveys = () => {
  return (
    <section className="flex flex-col m-2 bg-sixth p-2 font-bold">
        <span className="text-third text-sm">SONDAGGI</span>
        <img className="w-full h-24 object-cover object-center my-2" src={imgLocal} alt="img"></img>
        <span className="text-white mb-2">DOMANDA SONDAGGIO CON PUNTO INTERROGATIVO?</span>
        <Button>VOTA</Button>
    </section>
  )
}

export default Surveys