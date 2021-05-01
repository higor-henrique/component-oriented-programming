import style from "./style.module.scss";
import axios_config from "./../../config/axios"
import service from "../../services/criptoService";

import react, { useState, useEffect } from "react";

export default function Content() {
  const [negotiation, setNegotiation] = useState()

  useEffect(() => {      
  }, [])

  const getCoin = ((coin) => {
    axios_config.get(`${coin}/ticker`).then((response)=> {
      console.log(response)
      setNegotiation(response.data.ticker) 
    }).catch( (err)=> {
    });

  })
  const search =(()=> {

  })

  return (
    <div className={style.contentContainer}>
      <img className={style.photoTop} src="./hexagono-first.svg" alt="photo" />
      <div className={style.containerCard}>
        <div className={style.cardPrimary}>
          <p>Higor e o Tr Chupam a minha bola</p>
        </div>
        <div className={style.cardSecundary}>
          <p>{negotiation}</p>
          <p>{negotiation}</p>
          <p>{negotiation}</p>
          <p>{negotiation}</p>
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
