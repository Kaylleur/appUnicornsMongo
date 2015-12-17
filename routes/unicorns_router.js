var express = require('express');
var unicornsController = require('../controllers/unicorn_controller');
var router = express.Router();

router.get('/', unicornsController.all);
router.post('/', unicornsController.add);
router.get('/:id', unicornsController.get);
router.put('/:id',unicornsController.edit);
router.delete('/:id',unicornsController.remove)

module.exports = router;
