// const Decks = require('../models/decks')

function getNameParameter(req) {
    if (req.body.name === undefined || req.body.name.length === 0) {
        return ''
    }
    return `name:${req.body.name}`
}

function getSuperTypeParameter(req) {
    if (req.body.supertype === undefined || req.body.supertype.length === 0) {
        return ''
    }
    let supertypes = [req.body.supertype]
    if (Array.isArray(req.body.supertype)) {
        supertypes = req.body.supertype
    }
    let supertypesParameters = supertypes.map(x => `supertype:${x}`)
    return `(${supertypesParameters.join(' OR ')})`
}

function getTypeParameter(req) {
    if (req.body.type === undefined || req.body.type.length === 0) {
        return ''
    }
    let types = [req.body.type]
    if (Array.isArray(req.body.type)) {
        types = req.body.type
    }
    let typesParameters = types.map(x => `types:${x}`)
    return `(${typesParameters.join(' OR ')})`
}

function getSetParameter(req) {
    if (req.body.set === undefined || req.body.set.length === 0) {
        return ''
    }
    let sets = [req.body.set]
    if (Array.isArray(req.body.set)) {
        sets = req.body.set
    }
    let setsParameters = sets.map(x => `set.id:${x}`)
    return `(${setsParameters.join(' OR ')})`
}


module.exports = {
    index: async (req, res) => {
        res.render('search/index.ejs', { 
            cards: []
        })
    },
    results: async(req, res) => {
        console.log(req.body)
        const pokemon = require('pokemontcgsdk')
        pokemon.configure({apiKey: '9aac7fc4-dfb9-41eb-ab2f-f30e2976bd08'})
        
        let query = [
            getNameParameter(req),
            getSuperTypeParameter(req),
            getTypeParameter(req),
            getSetParameter(req)
        ].join(' ')
        
        let cards = await pokemon.card.all({ q: query}) || []

        res.render('search/results.ejs', { 
            cards: cards
        })
    }
}