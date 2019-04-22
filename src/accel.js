require("babel-polyfill");
const axios = require("axios");
const API_ROOT = "http://localhost:3002";

const headers = {
  headers: {
    "content-type": "application/json"
  }
};

const accel = {
  createWallet: async auth => {
    try {
      const makeCreateWalletRequest = await axios.post(
        `${API_ROOT}/createWallet?auth=${auth}`
      );
      return makeCreateWalletRequest.data;
    } catch (error) {
      throw error;
    }
  },

  getBalance: async (auth, wallet) => {
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
      throw error;
    }
  },

  sendTransaction: async (
    auth,
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
      throw error;
    }
  },

  call: async (auth, id, method, args = []) => {
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
      throw error;
    }
  },

  transaction: async (
    auth,
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
      throw error;
    }
  }
};

module.exports = accel;
