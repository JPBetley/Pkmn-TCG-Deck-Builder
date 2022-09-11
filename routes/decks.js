const { request } = require('express')
const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')
const decksController = require('../controllers/decks')

// // @desc    Get collection of cards and render it on your index.ejs
// // @route   GET /
// // This creates a "logged-in users only" section of the website
// router.get('/profile', ensureAuth, decksController.getProfile)

// @desc    Clones the card you clicked from search results and places it in the deck
// @route   POST /cards
router.post('/createDeckCard', ensureAuth, decksController.createDeckCard)

// @desc    Deletes a single card upon clicking it
// @route   DELETE /delete-single-card
router.delete('/delete-card', ensureAuth, decksController.deleteCard)

// @desc    Deletes all cards upon clicking the "Delete Deck" button
// @route   DELETE /delete-all-cards
router.delete('/delete-deck', ensureAuth, decksController.deleteDeck)

module.exports = router


