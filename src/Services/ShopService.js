import Config from "../Config/Config";
import www from "../Utils/www.js";

class ShopService {
  getRubies = async() => {
    const path = 'v1/shop/ruby';
    return await www.get(Config.amApi + path, true);
  };

  purchaseRuby = async (id) => {
    const path = 'v1/shop/purchase/klay/ruby/' + id;
    return await www.post(Config.amApi + path, {}, true);
  };

  getPurchaseLogs = async () => {
    const path = 'v1/shop/purchase/logs/20';
    return await www.get(Config.amApi + path, true);
  };
}

export default new ShopService();
