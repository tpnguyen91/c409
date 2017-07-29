import express from 'express';
import newsCtrl from '../controllers/news';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
  .get(newsCtrl.getAllNews)

  /** POST /api/users - Create new user */
  .post(newsCtrl.addNews);

router.route('/:id')
  /** GET /api/users/:userId - Get user */
  .get(newsCtrl.findById)

  /** PUT /api/users/:userId - Update user */
  .put(newsCtrl.updateNews)

  /** DELETE /api/users/:userId - Delete user */
  .delete(newsCtrl.deleteNews);

/** Load user when API with userId route parameter is hit */

export default router;
