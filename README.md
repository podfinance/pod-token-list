# Pod Finance token list

This GitHub repo contains the token list used in the https://app.pod.finance interface.

## Adding a token

To submit the integration of your token to Pod Finance, you can create your entry and submit a PR with it.

### 1. Fork this repo

### 2. Add your token logo in `src/assets/`

The file name uploaded to `src/assets/` must match logo field in `src/tokens/base.json`

### 3. Add your token entry in `src/tokens/base.json`

### 4. Provide the following required information for your token

-   chainId (number): **8453**
-   symbol (string)
-   name (string)
-   address (string)
-   logo (string): **File name including extension** of you logo uploaded to `/src/assets/**` with a minimum 256x256 res
-   decimals (number)
-   isWNative (boolean)

## Disclaimer

Token addition to this list is **NOT NEEDED** to use Pod Finance's app or contracts.

We do not review token addition requests in any particular order, and we do not
guarantee that we will review your request to add the token to the list.
