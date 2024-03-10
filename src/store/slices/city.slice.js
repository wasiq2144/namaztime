import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchLocation = createAsyncThunk(
  'location/fetchLocation',
  async () => {
    const ipUrl = 'https://api.ipify.org?format=json';
    try {
      // Fetch the user's IP address
      const response = await fetch(ipUrl);
      const data = await response.json();
      const userIp = data.ip;

      // Fetch location data based on the IP address
      const locationResponse = await fetch(`https://ipapi.co/${userIp}/json/`);
      const locationData = await locationResponse.json();

      const cityName = locationData.city || 'United Kingdom';
      const countryName = locationData.country_name || 'United Kingdom';

      return { cityName, countryName };
    } catch (error) {
      throw Error('Failed to fetch location data');
    }
  }
);

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    cityName: '',
    countryName: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.cityName = action.payload.cityName;
        state.countryName = action.payload.countryName;
      });
  },
});

export default locationSlice.reducer;
