// namazSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchNamazTime = createAsyncThunk(
  'namaz/fetchNamazTime',
  async ({ cityName, countryName }, { rejectWithValue }) => { // Accept cityName and countryName as arguments
    try {
      const currentDate = new Date();
      const day = currentDate.getDate() < 10 ? '0' + currentDate.getDate() : currentDate.getDate();
      const month = (currentDate.getMonth() + 1) < 10 ? '0' + (currentDate.getMonth() + 1) : (currentDate.getMonth() + 1);
      const year = currentDate.getFullYear();
      const formattedDate = day + '-' + month + '-' + year;

      const url = `https://api.aladhan.com/v1/timingsByCity/${formattedDate}?city=${cityName}&country=${countryName}&method=8`;
      const response = await fetch(url);
      const data = await response.json();
      console.log('Fetched namaz time:', data);

      return data.data.timings;
    } catch (error) {
      console.error('Error fetching namaz time:', error);
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  prayerTimes: null,
  error: null,
};

const namazSlice = createSlice({
  name: 'namaz',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNamazTime.fulfilled, (state, action) => {
        state.prayerTimes = action.payload;
        state.error = null;
      })
      .addCase(fetchNamazTime.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default namazSlice.reducer;
