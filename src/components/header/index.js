import style from "./style.module.scss";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import coins from '../../config/coins.json'
import {useState} from 'react'
import criptoService from '../../services/criptoService';



export default function Header() {

  const [coinSelected,setCoinSelected] = useState();
  const [negotiation,setNegotiation] = useState();

  
  const search = (async()  => {
    const teste = await criptoService.getCoin(coinSelected,'ticker')
    setNegotiation(teste);
    
    
    console.log(negotiation);
  })
  
  return (
    <div className={style.headerContainer}>
      <img src="./Logo.svg" alt="logo"/>
      <Autocomplete
      freeSolo
      disableClearable
      id="combo-box-demo"
      options={coins}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} />}  
      onChange={(event, newValue) => {       
        setCoinSelected(newValue.name);
      }}    
    />
    <button onClick={search}>Pesquisar</button>
    </div>
  );
 
}
