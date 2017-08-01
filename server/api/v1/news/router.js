const express = require('express')
const NewsV1 = require('./v1/news')

const router = express.Router()

router.get('/news', NewsV1.index)
router.get('/news/:_id', NewsV1.getById)
router.post('/news', NewsV1.create)
router.put('/news/:_id', NewsV1.update)
router.delete('/news/:_id', NewsV1.delete)

module.exports = router
