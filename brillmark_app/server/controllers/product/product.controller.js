/**
 * Product Controller---------------------------
 */

 const Product = require('../../models/product.model');

 exports.addProduct = (req, res, next) => {

    const newProduct = new Product({
        title: req.body.title,
        category: req.body.category,
        quantity: req.body.quantity,
        price: req.body.price
    });

    newProduct.save().then( result => {

        if(!result){
            return res.status(201).json({
                error: true,
                msg: "Already Exists"
            });
        }
        return res.status(201).json({
            data: result,
            msg: "Successfully Added",
            error:false
        })

    }).catch( error => {
        return res.status(200).json({
            error: true,
            msg: error
        });
    });

 }

 exports.updateProduct = (req, res, next) => {

     const productId = req.productData.productId;

     const newProduct = new Product({
        title: req.body.title,
        category: req.body.category,
        quantity: req.body.quantity,
        price: req.body.price
    });
     
     Product.updateOne({ _id: productId }, newProduct).then(result => {
         if (result.n > 0) {
            res.status(201).json({
            data: result,
            error: false,
            msg: 'Successfully Updated Product'
        });
             
         } else {
            res.status(201).json({
            error: true,
            msg: 'Problem in Updating product'
        });
         }
        
    }).catch( error => {
        res.status(201).json({
            error: true,
            msg: error
        });
    });
 }