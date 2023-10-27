const express = require('express');
const router = express.Router();
const CurriculoController = require('../controllers/CurriculoController');

const AuthMiddleware = require('../middleware/AuthMiddleware.js'); // Importe o middleware
router.use(AuthMiddleware);

router.get('/', CurriculoController.list);
router.post('/', CurriculoController.create);
router.get('/:id', CurriculoController.get);
router.put('/:id', CurriculoController.update);
router.delete('/:id', CurriculoController.delete);

module.exports = router;