const express = require('express')
const AgencyV1 = require('./v1/agency')
const OrderV1 = require('./v1/order')
const AwardV1 = require('./v1/award')

const router = express.Router()

router.get('/agency', AgencyV1.index)
router.get('/agency/:_id', AgencyV1.getById)
router.post('/agency', AgencyV1.create)
router.put('/agency/:_id', AgencyV1.update)
router.delete('/agency/:_id', AgencyV1.delete)

router.get('/order', OrderV1.index)
router.get('/order/:_id', OrderV1.show)
router.post('/order', OrderV1.create)

router.get('/award', AwardV1.index)

module.exports = router
