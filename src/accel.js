require("babel-polyfill");
const axios = require("axios");

const headers = {
  headers: {
    "content-type": "application/json"
  }
};

const accel = {
  createWallet: async (endPoint, auth) => {
    try {
      const makeCreateWalletRequest = await axios.post(
        `${endPoint}/createWallet?auth=${auth}`
      );
      return makeCreateWalletRequest.data;
    } catch (error) {
      throw error;
    }
  },

  getBalance: async (endPoint, auth, wallet) => {
    try {
      const params = {
        params: {
          wallet
        }
      };

      const makeCallRequest = await axios.get(
        `${endPoint}/getBalance?auth=${auth}`,
        params
      );

      return makeCallRequest.data;
    } catch (error) {
      throw error;
    }
  },

  sendTransaction: async (
    endPoint,
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
        `${endPoint}/send?auth=${auth}`,
        params,
        headers
      );

      return makeCallRequest.data;
    } catch (error) {
      throw error;
    }
  },

  call: async (endPoint, auth, id, method, args = []) => {
    try {
      const params = {
        id,
        method,
        args: JSON.stringify(args)
      };

      const makeCallRequest = await axios.post(
        `${endPoint}/call?auth=${auth}`,
        params,
        headers
      );
      return makeCallRequest.data;
    } catch (error) {
      throw error;
    }
  },

  transaction: async (
    endPoint,
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
        `${endPoint}/transaction?auth=${auth}`,
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
