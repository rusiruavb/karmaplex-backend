const express = require('express')
const multer = require('multer')
const controller = require('./LaunchpadSubmission.controller')
const router = express.Router()
const upload = multer()

module.exports = () => {
  router.post(
    '/launchpad-submission/add', 
    upload.fields(
      [
        { name: 'collection_image', maxCount: 1 }, 
        { name: 'collection_banner', maxCount: 1 }
      ]
    ), 
    controller.addSubmission
  )
  router.get('/launchpad-submission/get', controller.getSubmissions)
  router.get('/launchpad-submission/find/name/:id', controller.findByCollectionName)
  router.get('/launchpad-submission/find/mint/:collectionName/:id', controller.findByMint)
  router.get('/launchpad-submission/featured', controller.getFeaturedSubmission)
  router.put('/launchpad-submission/', controller.statusToApprove)
  router.put('/launchpad-submission/mark-featured/:id', controller.makrAsFeatured)

  return router
}