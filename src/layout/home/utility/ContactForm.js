//REACT
import React from 'react'

//COMPONENT
import Button from '../../../components/buttons/Button'

function ContactForm() {
    return (
        <section className="bg-sixth text-seventh flex flex-col gap-3 m-2 p-2">
            <span className="text-third font-bold">REDAZIONE</span>
            <div>
                <p className="text-xs">Qualcosa non ti convince del sito? </p>
                <p className="text-xs">Vuoi segnalare dei contenuti mancanti?</p>
            </div>
            <select className="bg-primary border border-gray-light outline-none">
                <option>Segnala una News</option>
                <option>Link non funzionante</option>
                <option>Bug</option>
                <option>Complimenti</option>
            </select>
            <textarea placeholder="Scrivi il tuo messaggio..." className="bg-primary min-h-[80px] border-gray-light border outline-none"></textarea>
            <Button>INVIA</Button>
        </section>
    )
}

export default ContactForm