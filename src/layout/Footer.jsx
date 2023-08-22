//REACT
import React from "react";

//LOGO
import { Logo } from "../components/svg/logo/Logo";
import Social from "../components/other/Social";

//COMPONENTS
import InfoLink from "../components/other/InfoLink";
import NetworkInfo from "../components/other/NetworkInfo";
import Copyright from "../components/other/Copyright";

function Footer() {
  const multiLogoHeight = "1.3em";
  const socialHeight = "2em";

  return (
    <footer>
      <section className="bg-footer border-t border-primary fill-white flex flex-col md:flex-row gap-6 text-white text-lg p-4 leading-7">
        <div className="flex flex-col gap-6 w-full">
          <Logo height={multiLogoHeight} />
          <Social height={socialHeight} />
        </div>
        <div className="flex flex-col">
          <p id="caption">
            Dedicato cervello e anima a tutti quelli che i videogiochi li hanno
            nel sangue, Multiplayer.it è il punto di riferimento italiano per
            l'intrattenimento del presente e del futuro. Preparatevi ad essere
            stupiti ogni giorno con articoli, news, video, live e produzioni
            geniali.
          </p>
          <InfoLink />
          <div className="bg-third h-[1px] w-full"></div>
          <NetworkInfo />
          <div className="bg-third h-[1px] w-full"></div>
          <Copyright>
            © 2023 NetAddiction Srl - P.iva: 01206540559 – Sede Legale: Via A.M.
            Angelini, 12 - 05100 Terni (TR) Italy
          </Copyright>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
