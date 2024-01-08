import { router, BASE } from '../app';

import './pages/HomePage';
import './pages/AboutPage';

router.setRoutes([
  { path: `${BASE}/`, component: 'home-page' },
  { path: `${BASE}/about`, component: 'about-page' },
  { path: '(.*)', component: 'home-page' }
]);
