import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {stateDataReducer} from '../data/reducer/reducer';
import rootSaga from '../data/middleware/sagaMiddleware';
// put here all the reducer
export const rootReducer = combineReducers({
  todoData: stateDataReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleWareEnhancer = applyMiddleware(sagaMiddleware);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['todoData'],
};

const pReducer = persistReducer(persistConfig, rootReducer);
export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = createStore(pReducer, middleWareEnhancer);
export const persistor = persistStore(configureStore);
sagaMiddleware.run(rootSaga);
