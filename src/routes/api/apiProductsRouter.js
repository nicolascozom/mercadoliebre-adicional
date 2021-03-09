// ************ Require's ************
const express = require('express');
const router = express.Router();


const apiProductsController = require('../../controllers/api/apiProductsController');

router.get('/latest', apiProductsController.latest); /* GET - Últimos productos cargados */

router.get('/offers', apiProductsController.offers); /* GET - Productos en oferta*/

router.get('/categories/:category?', apiProductsController.categories)

module.exports = router;