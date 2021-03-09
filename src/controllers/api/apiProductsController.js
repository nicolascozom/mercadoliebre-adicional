// ******** Sequelize ***********
const { Product, Sequelize, Brand, Category } = require('../../database/models');
const Op = Sequelize.Op;

module.exports = {
	latest (req, res){

        const ultimos = Product.findAll({
			order: [
				['createdAt', 'DESC']
			]
		})

		.then(function(ultimos){

            let respuesta = {
                
                "meta": {
                    "status": 200,
                    "count":ultimos.length,
                    "url": "/api/products/latest"
                },
                "data": {
                    ultimos
                }

            };

            res.json(respuesta)
        })
        .catch(e => console.log(e));

	},

    offers (req,res){

        const inSale = Product.findAll({
            order: [
				['discount', 'DESC']
			],
			where: {
				discount: {
					[Op.gt]: 0
				}
			}
		})
        .then(function(inSale){

            let respuesta = {
                
                "meta": {
                    "status": 200,
                    "count":inSale.length,
                    "url": "/api/products/offers"
                },
                "data": {
                    inSale
                }

            };

            res.json(respuesta)
        })
        .catch(e => console.log(e));

        // res.send("holaaa desde el products controller método offers")
    },
    
    categories (req, res) {
        
		let products = [];
		let title = "Todos los productos";

		if (req.params.category != undefined) {

            title = req.params.category;

			let category = Category.findOne({
				where: {
				   name: req.params.category
				},
				include: ['products']
			})
			
            .then(function(category){
                let respuesta = {
                    "meta": {
                        "status": 200,
                        "title":title,
                        "count":category.products.length,
                        "url": "/api/products/categories/" + category.name 
                    },
                    "data": {
                        category
                    }
                };

                res.json(respuesta)
            })
            .catch(e => console.log(e));
			 


		} else {
			products = Product.findAll({
                order: [
                    ['categoryId']
                ]            
            })
            .then(function(products){
                let respuesta = {
                    "meta": {
                        "status": 200,
                        "title":'Todas las categorías',
                        "url": "/api/products/categories/" 
                    },
                    "data": {
                        products
                    }
                };

                res.json(respuesta)
            })
            .catch(e => console.log(e));

		}
	}

}