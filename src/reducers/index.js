import { combineReducers } from 'redux';

import BookReducers from './reducer_books';
import ActiveBookReducers from './reducer_active_book';

const rootReducer = combineReducers({
  books: BookReducers,
  activeBook: ActiveBookReducers
});

export default rootReducer;
