import axios_config from "../config/axios"

class CriptoService {
  static async getCoin(coin, method) {
    try {

      return await axios_config.get(`${coin}/${method}`);

    }catch(e) {
      console.log(e);
    }
  }
}


export default CriptoService;