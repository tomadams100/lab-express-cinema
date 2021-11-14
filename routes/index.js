const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req,res) => {
    try {
        const allMovies = await Movie.find()
        res.render('movies', {allMovies})
    } catch (err) {
        console.log(err)
    }
})

router.get('/movie/:id', async (req,res) => {
    try {
        const {id} = req.params
        const movie = await Movie.findById(id)
        res.render("movieDetails", {movie})
    } catch (err) {
        console.log("ERROR>>>>>> ",err)
    }
})

module.exports = router;
