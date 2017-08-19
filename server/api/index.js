import { isAuthenticated } from '../helpers/auth';
const ApiV1 = require('./routes');

module.exports = (app) => {
  app.use('/api/v1', isAuthenticated, ApiV1)
}
