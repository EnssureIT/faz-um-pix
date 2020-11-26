const express = require('express');
const router = express.Router();
//////////// import routes here
const indexRouter = require('./indexRouter');
const PayRoute = require('./PayRoute');

//////////// define routes api here
router.use('/api/', indexRouter);
router.use('/api/Pay', PayRoute);

module.exports = router;