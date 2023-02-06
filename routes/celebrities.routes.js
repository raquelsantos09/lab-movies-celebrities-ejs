const Celebmodel = require('../models/Celebrity.model')

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here
// GET method route
router.get('/celebrities/create', (req, res) => {
    res.render('celebrities/new-celebrity')

})

router.post('/celebrities/create', async (req, res) => {
    try {
        console.log('this post route works 🥷')
        const body = req.body
        const celeb = await Celebmodel.create(body)
        res.redirect('/celebs/celebrities/create')
        console.log(celeb)
    } catch (error) {
        console.log('there was an error')
    }
})


module.exports = router