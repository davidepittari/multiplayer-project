import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../hook/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})