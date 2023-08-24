//REACT
import React from 'react'

//IMG
import imgTest from "../../../assets/img/frost-planet-concept-art.jpeg";

function MostTrandingNews({ listNews }) {

    return (
        <section className="bg-sixth m-2 p-2 hidden lg:flex flex-col font-bold sticky-component sticky top-14">
            <span className="text-third border-b-primary border-b pb-2">LE NOTIZIE PIU LETTE</span>
            {
                listNews && listNews.slice(0, 5).map((news, index) =>
                    <figure key={index} className="flex flex-row gap-1 items-center border-b-primary border-b my-2 pb-2 cursor-pointer">
                        <img className="w-14 h-14 object-cover object-center" src={imgTest} alt="img"></img>
                        <p className="text-white font-semibold text-sm leading-4">{news.title}</p>
                    </figure>
                )
            }
            <span className="text-end text-xs py-2 text-third font-bold hover:text-btnhover cursor-pointer">LEGGI TUTTE LE NOTIZIE</span>
        </section>
    )
}

export default MostTrandingNews