import { createStore } from 'redux'
import { reducer } from './data'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/lib/persistReducer'

import { persistStore } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

export const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
