const express = require('express')
const AgencyV1 = require('./v1/agency')

const router = express.Router()

router.get('/agency', AgencyV1.index)
router.post('/agency', AgencyV1.create)
router.put('/agency/:_id', AgencyV1.update)
router.delete('/agency/:_id', AgencyV1.delete)

module.exports = router
