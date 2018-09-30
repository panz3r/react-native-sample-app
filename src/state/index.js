import { AsyncStorage } from 'react-native';
import { DEBUG } from 'react-native-dotenv';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import user from './user';

// PERSISTENCE

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

// REDUCERS

const reducers = combineReducers({
  user
});

const persistedReducer = persistReducer(persistConfig, reducers);

// MIDDLEWARES AND ENHANCERS

const middlewares = [thunk];

if (DEBUG === 'true') {
  middlewares.push(logger);
}

// STORE

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export const storeIsReady = () => new Promise(resolve => {
    let _unsubscribe = null;

    const _handlePersistorState = () => {
      const { bootstrapped } = persistor.getState();

      if (bootstrapped) {
        _unsubscribe && _unsubscribe();

        // Resolve promise
        resolve();
      }
    };

    _unsubscribe = persistor.subscribe(_handlePersistorState);
    _handlePersistorState();
  });
