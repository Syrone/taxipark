import { getHeaderHeight } from '../functions/header-height';
import { throttle } from '../functions/throttle';

getHeaderHeight()
window.addEventListener('resize', throttle(getHeaderHeight));