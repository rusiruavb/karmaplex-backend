const express = require('express')
const controller = require('./NFTTags.controller')
const router = express.Router()

module.exports = () => {
  router.post('/nft-tag/create', controller.createNFTTag)
  router.get('/nft-tag/get', controller.getNFTTags)

  return router
}