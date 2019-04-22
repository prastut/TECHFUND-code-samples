const accel = require("./lib/accel");

let auth = "0d8938875a1a61e76761e332d9dcac951abee7b1";
const endPoint = "http://localhost:3002";

// accel
//   .createWallet(endPoint, auth)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error.response.data);
//   });

// //Getting Balance
// accel
//   .getBalance(endPoint, auth, "0xca5a4ebf81a8faddcdf2932c58c67f6cb8d9a49a")
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// accel
//   .sendTransaction(
//     auth,
//     "0xca5a4ebf81a8faddcdf2932c58c67f6cb8d9a49a",
//     "0x8988dcebebe2b2cc753c34fc269e2ae4471e7ea5",
//     "1000000000000000"
//   )
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const argumentsToSend = ["techfund"];

accel
  .call(endPoint, auth, "f8bdfc873989bdb37991", "get", argumentsToSend)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

// const argumentsToSend = ["techfund", "25"];

// accel
//   .transaction(
//     endPoint,
//     auth,
//     "f8bdfc873989bdb37991",
//     "set",
//     argumentsToSend,
//     "0xca5a4ebf81a8faddcdf2932c58c67f6cb8d9a49a"
//   )
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
