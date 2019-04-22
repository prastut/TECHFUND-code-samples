const request = require("request");

const API_ROOT = "http://localhost:3002/";
const SERVER_ROOT = "http://localhost:3000/";

let adminWallet = "0xca5a4ebf81a8faddcdf2932c58c67f6cb8d9a49a";
let auth = "0d8938875a1a61e76761e332d9dcac951abee7b1";

const ACCELCall = (contractId, method, args = []) => {
  callAPI("call", contractId, method, args, null, false, (err, body) => {
    console.log(body.data);
  });
};

const callAPI = (
  endpoint = "call",
  contractId,
  method,
  args = [],
  wallet = null,
  delegate = false,
  cb
) => {
  let requestData = {};
  let url = `${API_ROOT}${endpoint}?auth=${auth}`;

  if (endpoint == "call" || endpoint == "transaction") {
    requestData = {
      id: contractId,
      method: method,
      args: JSON.stringify(args),
      wallet: wallet,
      fee: "high",
      delegate: delegate
    };
  } else if (endpoint != "createWallet") {
    return cb("Invalid API call", null);
  }

  let requestHeaders = {
    "Content-Type": "application/json"
  };
  let options = {
    url: url,
    method: "POST",
    headers: requestHeaders,
    json: true,
    form: requestData
  };

  console.log(options);

  request(options, function(error, response, body) {
    cb(error, body);
  });
};

//e9f37c04edd58fd87e10 id for simple ledger
ACCELCall("e9f37c04edd58fd87e10", "get");
