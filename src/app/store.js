import { configureStore } from '@reduxjs/toolkit'
import employeesReducer  from '../features/employees/employeesSlice'

import storage from "redux-persist/lib/storage"; // Utilisation du localStorage
import { persistReducer, persistStore } from "redux-persist"
import { combineReducers } from "redux"


const persistConfig = {
  key: "root",
  storage, // Permet de stocker les données dans le localStorage
}

// Au cas où plusieurs Slices
const rootReducer = combineReducers({
  employees: employeesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ["persist/PERSIST", "persist/REHYDRATE"], // ✅ Ignore Redux Persist
      }
    })
})

export const persistor = persistStore(store);