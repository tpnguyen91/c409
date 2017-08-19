const express = require('express')
const OrderV1 = require('./v1/order')
const NewsV1 = require('./v1/news')
const ResultLotteryV1 = require('./v1/result-lottery')

const router = express.Router()


router.get('/news', NewsV1.index)
router.get('/news/:_id', NewsV1.getById)
router.post('/news', NewsV1.create)
router.put('/news/:_id', NewsV1.update)
router.delete('/news/:_id', NewsV1.delete)

router.get('/order', OrderV1.index)
router.get('/order/:_id', OrderV1.show)
router.post('/order', OrderV1.create)

router.get('/crawler/:id', ResultLotteryV1.fetch)
router.get('/crawler', ResultLotteryV1.fetchWiParams)

module.exports = router
