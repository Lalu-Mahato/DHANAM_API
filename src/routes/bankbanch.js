const router = require('express').Router();
const bankbanchController = require('@controllers/BankBanchController');

router.post('/', bankbanchController.create);

module.exports = router;
