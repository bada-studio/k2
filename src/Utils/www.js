import axios from 'axios/index';
import util from "./util";
import {SimpleLoader} from "../Containers";

class WWW {
  constructor() {
    this.uid = "";
    this.accessToken = "";
  }

  async post(path, data, loading) {
    await util.sleep(1);
    if (loading) {
      SimpleLoader.show();
    }

    try {
      let res = await axios.post(path, data, {
        headers: {
          "Content-type": "application/json",
          "uid": this.uid,
          "accessToken": this.accessToken
        }
      });

      if (this.isSuccess(res.status)) {
        return await res.data;
      }
    } catch (e) {
      console.error(e);
    } finally {
      if (loading) {
        SimpleLoader.hide();
      }
    }
  }

  async get(path, loading) {
    await util.sleep(1);
    if (loading) {
      SimpleLoader.show();
    }

    try {
      let res = await axios.get(path, {
        headers: {
          "Content-type": "application/json",
          "uid":this.uid,
          "accessToken":this.accessToken
        }
      });

      if (this.isSuccess(res.status)) {
        return await res.data;
      }
    } catch (e) {
      console.error(e);
    } finally {
      if (loading) {
        SimpleLoader.hide();
      }
    }
  }

  isSuccess(resCode) {
    return resCode / 100 === 2;
  }
}

export default new WWW();
