import style from "./style.module.scss";

import service from "../../services/criptoService";

import react, { useState, useEffect } from "react";

export default function Content() {
  const [negotiation, setNegotiation] = useState({})

  useEffect(() => {
    const coin = "BTC";
    const information = "ticker";

    const getInformation = service
      .getCoin(coin, information)
      .then((response) => {
        setNegotiation(response) 
      })
      .catch((error) => {
        console.log(error);
      });

  }, [])

  return (
    <div className={style.contentContainer}>
      <img className={style.photoTop} src="./hexagono-first.svg" alt="photo" />
      <div className={style.containerCard}>
        <div className={style.cardPrimary}>
          <p>Higor e o Tr Chupam a minha bola</p>
        </div>
        <div className={style.cardSecundary}>
          <p>{negotiation.data.ticker.buy}</p>
          <p>{negotiation.data.ticker.date}</p>
          <p>{negotiation.data.ticker.high}</p>
          <p>{negotiation.data.ticker.low}</p>
        </div>
      </div>
      <img
        className={style.photoBottom}
        src="./hexagono-secundary.svg"
        alt="photo"
      />
    </div>
  );
}
