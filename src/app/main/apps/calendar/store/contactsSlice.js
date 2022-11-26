import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContacts = createAsyncThunk('calendarApp/contacts/getContacts', async () => {
  const response = await axios.get('/api/contacts');
  const data = await response.data;

  return data;
});

const contactsAdapter = createEntityAdapter({});

export const {
  selectAll: selectContacts,
  selectById: selectContactById,
} = contactsAdapter.getSelectors((state) => state.calendarApp.contacts);


const contactsSlice = createSlice({
  name: 'calendarApp/contacts',
  initialState: contactsAdapter.getInitialState({
    contacts: [],
  }),
  reducers: {},
  extraReducers: {
    [getContacts.fulfilled]: (state, action) => {
      contactsAdapter.setAll(state, action.payload);
      state.contacts = action.payload.map((item) => item.id);
    },
  },
});

export default contactsSlice.reducer;
