// import {configureStore} from '@reduxjs/toolkit';
// import { cryptoApi } from '../services/cryotoApi';

// export default configureStore({
//     reducer:{
//         [cryptoApi.reducerPath]:cryptoApi.reducer,
//     }
// })

import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryotoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
  },
});