
import fs from 'fs'
import express from 'express'
export default (app) => {
  const apiRouter = createApiRouter()
  app.use('/api/v1',apiRouter)
}

const createApiRouter = () => {
  const apiRouter = express.Router()
  let moduleRouter

  // synchronous to ensure all route registration before returning the router
  fs.readdirSync(__dirname).forEach((file) => {
    if (file.indexOf('.') === -1) {
      moduleRouter = require(`./${file}`).router
      if (typeof moduleRouter === 'function') {
        apiRouter.use(`/${file}`, moduleRouter)
      }
    }
  })
  return apiRouter
}
