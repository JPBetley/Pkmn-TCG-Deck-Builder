const { request } = require('express')
const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')
const searchController = require('../controllers/search')

router.get('/', ensureAuth, searchController.index)
router.post('/results', ensureAuth, searchController.results)

module.exports = router


