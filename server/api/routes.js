const express = require('express')
const AgencyV1 = require('./v1/agency')
const OrderV1 = require('./v1/order')
const AwardV1 = require('./v1/award')
const NewsV1 = require('./v1/news')
const UserV1 = require('./v1/users')
const AuthV1 = require('./v1/auth')
const ResultLotteryV1 = require('./v1/result-lottery')

const router = express.Router()

router.get('/agency', AgencyV1.index)
router.get('/agency/:_id', AgencyV1.getById)
router.post('/agency', AgencyV1.create)
router.put('/agency/:_id', AgencyV1.update)
router.delete('/agency/:_id', AgencyV1.delete)

router.get('/news', NewsV1.index)
router.get('/news/:_id', NewsV1.getById)
router.post('/news', NewsV1.create)
router.put('/news/:_id', NewsV1.update)
router.delete('/news/:_id', NewsV1.delete)

router.get('/order', OrderV1.index)
router.get('/order/:_id', OrderV1.show)
router.post('/order', OrderV1.create)

router.get('/award', AwardV1.index)

router.get('/crawler/:id', ResultLotteryV1.fetch)


router.get('/auth', AuthV1.index)
router.post('/auth', AuthV1.create)
router.delete('/auth/:_id', AuthV1.delete)

router.post('/users', UserV1.create)
router.put('/users/:_id', UserV1.update)
router.delete('/users/:_id', UserV1.delete)

module.exports = router
