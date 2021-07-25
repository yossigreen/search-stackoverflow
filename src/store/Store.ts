import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistConfig } from 'redux-persist/es/types';
import reducers from './reducers';
import { Store } from '../types';

const persistConfig: PersistConfig<Store> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

const persistor = persistStore(store);

export { store, persistor };
