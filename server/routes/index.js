import express from 'express';
import newsRoutes from './news';

const router = express.Router(); // eslint-disable-line new-cap


// mount user routes at /users
router.use('/news', newsRoutes);

export default router;
