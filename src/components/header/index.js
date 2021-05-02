import style from "./style.module.scss";

export default function Header() {
  return (
    <div className={style.headerContainer}>
      <img src="./Logo.svg" alt="logo" />
      <input type="text" placeholder="Buscar por criptocurrent"></input>
    </div>
  );
}
