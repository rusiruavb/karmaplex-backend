# Sales API
The main purpose of the sales API is to store the past activities of a NFT. The information that is stored in the sales API as follows.
 - Transaction hash (`tnx_hash`)
 - Transaction type (`tnx_type`)
 - Date and time (`datetime`)
 - Solana amount of the transaction (`tnx_sol_amount`)
 - USD amount of the transaction (`tnx_usd_amount`)
 - Address of the sender (`from_address`)
 - Address of the receiver (`to_address`)
 - Collection name of the NFT (`collection`)
 - Mint key of the NFT (`mint`)
 - Auction details about the NFT (`auction`)

## Save sales details
When a user successfully buys a NFT, a request will be sent to the sales API with the aforementioned data. The details about the create API is listed below. <br>
**Endpoint** - `{BASE_ENDPOINT}/create` <br>
**Request body**
```
{
  "tnx_hash": null,
  "tnx_type":"Sale",
  "datetime":"Mon Apr 04 2022 16:48:54 GMT+0530",
  "tnx_sol_amount":"0.002",
  "tnx_usd_amount":0.27192,
  "from_address":"DtSJHek4nczcEaoZ4b3dzEmupGJ9p5KjV7w6KNXpH",
  "to_address":"944ye8Gtm7tZXSynrTGYEp2uYrnYaFjrYnyy4u7zrzYx",
  "collectionName":"Ninja Collection",
  "mint":"So111111111111111111111111111112",
  "auction":{
    "auctionGap": null,
    "authority": "ELAcW8cGnEMh6qUINd446TThd55RTvgRsCc56",
    "tokenMint": "So111111111111111111111111111112",
    "state": 1
  }
}
```
The above information is stored as a document in the Mongo DB collection.

### Get sales details
When the selected NFT page is loaded, an API request will be sent to the server to fetch the past sales information about the selected NFT. To get the past sales details about the NFT `mint` key is used to filter the data about the selected API. All the fetched details are displayed under the Actions tab in the NFT page. The details about the get sales details API as follows. <br>
**Endpoint** - `{BASE_API}/get/{mint_key}` <br>
**Response**
```
[
  {
    "_id":"625406ef69c5b552110c1f32",
    "tnx_hash": null,
    "tnx_type":"Sale",
    "datetime":"Mon Apr 04 2022 16:48:54 GMT+0530",
    "tnx_sol_amount":"0.002",
    "tnx_usd_amount":0.27192,
    "from_address":"DtSJHek4nczcEaoZ4b3dzEmupGJ9p5Kj",
    "to_address":"944ye8Gtm7tZXSynrTGYEp2uYrnYaFjrYnyy",
    "collectionName":"Ninja Collection",
    "mint":"So111111111111111111111111111112",
    "auction":{
      "auctionGap": null,
      "authority": "ELAcW8cGnEMh6qUINd446TThd55RTvgRsCc56",
      "tokenMint": "So111111111111111111111111111112",
      "state": 1
    }
  },
  {
    ...
  }
]
```

### Tools & Technologies
 - Node JS
 - Express framework
 - MongoDB
 - Docker

