import React from 'react'

function InfoLink() {
  return (
    <ul className="underline text-sm flex flex-row flex-wrap justify-center md:justify-start my-4">
        <li className="mr-2" href="www.google.it">Informativa sui Cookie</li>
        <li className="mx-2" href="www.google.it">Privacy Policy</li>
        <li className="mx-2" href="www.google.it">Termini e condizioni</li>
        <li className="mx-2" href="www.google.it">Contatti</li>
        <li className="mx-2" href="www.google.it">Lavora con noi</li>
        <li className="mr-2 mt-4 md:mt-0" href="www.google.it">Aggiornare le impostazioni di tracciamento della pubblicità</li>
    </ul>
  )
}

export default InfoLink