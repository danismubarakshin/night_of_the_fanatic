import { createStore } from 'redux'
import { reducer } from './reducers/reduce'

export const store = createStore(reducer)
