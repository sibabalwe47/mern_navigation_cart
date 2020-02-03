const express = require('express')
const Router = express.Router();
const { check, validationResult } = require('express-validator')

// Products Model

const Products = require('../../models/Product')


// GET all products

Router.get('/', async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})

// GET Single product

Router.get('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Products.findById(productId)
        if (!product) return res.status(400).json({ msg: 'Product does not exist' })

        res.send(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }


})

// Insert proudcts

Router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty(),
    check('filepath', 'Filepath is required').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(401).json({ 'errors': errors.array() })

    const { name, price, filepath } = req.body;

    console.log(name, price, filepath)

    try {
        let product = await Products.findOne({ filepath })

        if (product) return res.status(400).json({ msg: 'Product already exists' })

        product = new Products({
            name,
            price,
            filepath
        })

        await product.save()

        res.json(product)


    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})




module.exports = Router