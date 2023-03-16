import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IArtistSection } from '../../../interfaces/sections';

interface ISections {
  artistSection: IArtistSection | null;
}

const initialState: ISections = {
  artistSection: null,
};

export const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    setArtist: (state, action: PayloadAction<IArtistSection>) => {
      state.artistSection = action.payload;
    },
  },
});

export const { setArtist } = sectionSlice.actions;
export default sectionSlice.reducer;
