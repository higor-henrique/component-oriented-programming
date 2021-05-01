import axios_config from "../config/axios"

class CriptoService {
  static async getCoin(coin, method) {
    try {

      const information = await  axios_config.get(`${coin}/${method}`);
      return information;

    }catch(e) {
      console.log(e);
    }
  }
}


export default CriptoService;