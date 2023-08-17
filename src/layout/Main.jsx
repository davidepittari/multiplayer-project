//REACT
import React from 'react'

//COMPONENTS
import ArticleSection from './home/ArticleSection'
import NewsCard from '../components/cards/NewsCard'

function Main() {
  return (
    <section>
      <ArticleSection/>
      <NewsCard comment={"12"} timing={"12 MINUTI FA"} category={"NOTIZIA"} tag={"2023"} title={"Il 2023 sembra essere uno degli anni migliori di sempre per i videogiochi, stando alle medie voto"}/>
      <NewsCard comment={"25"} timing={"12 MINUTI FA"} category={"GAMING"} tag={"PLAYSTATION"} title={"Annunciato nuovo titolo esclusivo per PlayStation: I giocatori non vedono l'ora"}/>
      <NewsCard comment={"1"} timing={"30 MINUTI FA"} category={"GAMING"} tag={"PC"} title={"In arrivo importante aggiornamento per il videogioco più giocato su PC"}/>
      <NewsCard comment={"2"} timing={"1 ORA FA"} category={"GAMING"} tag={"NINTENDO"} title={"Rivelati dettagli sul prossimo capitolo della famosa saga di giochi Nintendo"}/>
      <NewsCard comment={"87"} timing={"2 ORE FA"} category={"GAMING"} tag={"ESPORTS"} title={"Torneo di eSports in arrivo: I team si stanno preparando per la sfida"}/>
      <NewsCard comment={"2"} timing={"3 ORE FA"} category={"GAMING"} tag={"XBOX"} title={"Aggiornamento firmware per Xbox: Miglioramenti e nuove funzionalità"}/>
      <div>MAIN</div>
      <div>MAIN</div>
      <div>MAIN</div>
      <div>MAIN</div>
      <div>MAIN</div>
      <div>MAIN</div>
      <div>MAIN</div>
      <div>MAIN</div>
      <div>MAIN</div>
      <div>MAIN</div>
      <div>MAIN</div>
      <div>MAIN</div>
      <div>MAIN</div>
      
    </section>
  )
}

export default Main