import { Router } from 'express';

import * as LocationsController from '../controllers/locations';
import * as OthersController from '../controllers/others';

const router = Router();

router.get('/', LocationsController.homeList);
router.get('/location', LocationsController.locationInfo);
router.get('/location/review/new', LocationsController.addReview);

router.get('/about', OthersController.about);

export default router;
