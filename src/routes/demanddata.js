const router = require('express').Router();
const demanddataController = require('@controllers/DemandDataController');

router.post('/upload', demanddataController.upload);

module.exports = router;
