# TECHFUND-code-samples

## Installation

```
npm install @prastut/accel
```

## How to use?

```
const accel = require("@prastut/accel");
```

then copy the `api-key` from accel-baas-admin

```
let auth = "0d8938875a1a61e76761e332d9dcac951abee7b1";
```

## Code Samples

### `/createWallet`

```

const accel = require("@prastut/accel");

let auth = "0d8938875a1a61e76761e332d9dcac951abee7b1";
let endPoint = "http://localhost:3002";


accel
  .createWallet(endPoint, auth)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error.response.data);
  });

```

### `/getBalance`

```
const accel = require("@prastut/accel");

let auth = "0d8938875a1a61e76761e332d9dcac951abee7b1";
let endPoint = "http://localhost:3002";


accel
  .getBalance(endPoint, auth, "0xca5a4ebf81a8faddcdf2932c58c67f6cb8d9a49a")
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error.response.data);
  });

```

### `/send`

```
const accel = require("@prastut/accel");

let auth = "0d8938875a1a61e76761e332d9dcac951abee7b1";
let endPoint = "http://localhost:3002";

accel
  .sendTransaction(
    endPoint,
    auth,
    "0xca5a4ebf81a8faddcdf2932c58c67f6cb8d9a49a",
    "0x8988dcebebe2b2cc753c34fc269e2ae4471e7ea5",
    "1000000000000000"
  )
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error.response.data);
  });
```

### `/call`

```
const accel = require("@prastut/accel");

let auth = "0d8938875a1a61e76761e332d9dcac951abee7b1";
let endPoint = "http://localhost:3002";

accel
  .call(endPoint, auth, "e9f37c04edd58fd87e10", "get")
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error.response.data);
  });

```

### `/transaction`

```

const accel = require("@prastut/accel");

let auth = "0d8938875a1a61e76761e332d9dcac951abee7b1";
let endPoint = "http://localhost:3002";


accel
  .transaction(
    endPoint,
    auth,
    "e9f37c04edd58fd87e10",
    "set",
    "8",
    "0xca5a4ebf81a8faddcdf2932c58c67f6cb8d9a49a"
  )
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error.response.data);
  });

```
