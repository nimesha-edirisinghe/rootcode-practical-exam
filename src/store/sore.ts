import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'store/rootState';
import rootSaga from 'store/rootSaga';

// Create the Redux Saga middleware
const saga = createSagaMiddleware();

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});

// Run the root saga
saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
