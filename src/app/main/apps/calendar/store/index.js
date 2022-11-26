import { combineReducers } from '@reduxjs/toolkit';
import events from './eventsSlice';
import labels from './labelsSlice';
import contacts from './contactsSlice';

const reducer = combineReducers({
  events,
  labels,
  contacts,
});

export default reducer;
