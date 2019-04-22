# TECHFUND-code-samples

## How to use?

First import accel library using the following format:

```
const accel = require("./lib/accel");
```

then copy the `api-key` from accel-baas-admin

```
let auth = "0d8938875a1a61e76761e332d9dcac951abee7b1";
```

## Code Samples

### `/createWallet`

```
const accel = require("./lib/accel");
let auth = "0d8938875a1a61e76761e332d9dcac951abee7b1";

accel
  .createWallet(auth)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error.response.data);
  });

```

### `/getBalance`

```
const accel = require("./lib/accel");
let auth = "0d8938875a1a61e76761e332d9dcac951abee7b1";


accel
  .getBalance(auth, "0xca5a4ebf81a8faddcdf2932c58c67f6cb8d9a49a")
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

```

### `/send`

```
const accel = require("./lib/accel");
let auth = "0d8938875a1a61e76761e332d9dcac951abee7b1";

accel
  .sendTransaction(
    auth,
    "0xca5a4ebf81a8faddcdf2932c58c67f6cb8d9a49a",
    "0x8988dcebebe2b2cc753c34fc269e2ae4471e7ea5",
    "1000000000000000"
  )
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```

### `/call`

```
const accel = require("./lib/accel");
let auth = "0d8938875a1a61e76761e332d9dcac951abee7b1";

accel
  .call(auth, "e9f37c04edd58fd87e10", "get")
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

```

### `/transaction`

```

const accel = require("./lib/accel");
let auth = "0d8938875a1a61e76761e332d9dcac951abee7b1";


accel
  .transaction(
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
    console.log(error);
  });

```
