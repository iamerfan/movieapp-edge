import { combineReducers, configureStore } from '@reduxjs/toolkit'
import dataReducer from './dataReducer'
import userReducer from './userReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { encryptTransform } from 'redux-persist-transform-encrypt'

const persistConfig = {
   key: 'root',
   storage,
   transforms: [
      encryptTransform({
         secretKey: 'my-super-secret-key',
         onError: function (error) {
            console.log(error)
         },
      }),
   ],
}
const reducers = combineReducers({ user: userReducer, data: dataReducer })
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
})
export const persistor = persistStore(store)
