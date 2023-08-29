//REACT
import React from 'react'

//IMG
import imgTest from "../../../assets/img/frost-planet-concept-art.jpeg";

function MostAnticipeted({ listNextGames }) {
    return (
        <section className="bg-sixth m-2 p-2 hidden lg:flex flex-col">
            <span className="font-bold text-third pb-2">I GIOCHI PIÙ ATTESI</span>
            {
                listNextGames && listNextGames.slice(0, 5).map((game, index) =>
                    <figure key={index} className="relative h-full cursor-pointer">
                        <img className="object-contain object-center" src={imgTest} alt='img'></img>
                        <div className="absolute bottom-px left-1 flex flex-col">
                            <span className="bg-black text-fifth text-xs w-fit px-2">{game.date.toUpperCase()}</span>
                            <span className="bg-black text-white w-fit font-bold px-2">{game.title.toUpperCase()}</span>
                        </div>
                    </figure>
                )
            }
            <span className="text-end text-xs py-2 text-third font-bold hover:text-btnhover cursor-pointer">GUARDA TUTTE LE USCITE</span>
        </section>
    )
}

export default MostAnticipeted