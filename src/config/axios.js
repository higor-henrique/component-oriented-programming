import axios from 'axios'

const axios_config = axios.create({
  baseURL: "https://www.mercadobitcoin.net/api/"
})

export default axios_config