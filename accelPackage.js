const axios = require("axios");
const API_ROOT = "http://localhost:3002";
let auth = "0d8938875a1a61e76761e332d9dcac951abee7b1";

const headers = {
  headers: {
    "content-type": "application/json"
  }
};

const accel = {
  createWallet: async () => {
    try {
      const makeCreateWalletRequest = await axios.post(
        `${API_ROOT}/createWallet?auth=${auth}`
      );
      return makeCreateWalletRequest.data;
    } catch (error) {
      return error;
    }
  },

  getBalance: async wallet => {
    try {
      const params = {
        wallet
      };

      const makeCallRequest = await axios.get(
        `${API_ROOT}/getBalance?auth=${auth}`,
        params
      );
      return makeCallRequest.data;
    } catch (error) {
      return error;
    }
  },

  sendTransaction: async (
    walletFrom,
    walletTo,
    amount,
    gas = null,
    unit = "wei",
    delegate = false
  ) => {
    try {
      const params = {
        from: walletFrom,
        to: walletTo,
        amount,
        gas,
        unit,
        delegate
      };

      const makeCallRequest = await axios.post(
        `${API_ROOT}/send?auth=${auth}`,
        params,
        headers
      );

      return makeCallRequest.data;
    } catch (error) {
      return error;
    }
  },

  call: async (id, method, args = []) => {
    try {
      const params = {
        id,
        method,
        args: JSON.stringify(args)
      };

      const makeCallRequest = await axios.post(
        `${API_ROOT}/call?auth=${auth}`,
        params,
        headers
      );
      return makeCallRequest.data;
    } catch (error) {
      return error;
    }
  },

  transaction: async (
    id,
    method,
    args = [],
    wallet,
    gas = null,
    delegate = false
  ) => {
    try {
      const params = {
        id,
        method,
        args: JSON.stringify(args),
        wallet,
        gas,
        delegate
      };

      const makeCallRequest = await axios.post(
        `${API_ROOT}/transaction?auth=${auth}`,
        params,
        headers
      );
      return makeCallRequest.data;
    } catch (error) {
      return error;
    }
  }
};

module.exports = accel;
