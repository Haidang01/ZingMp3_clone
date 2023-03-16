import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IMusicState {
  currentSongId: string;
  played: boolean;
  duration: string | null;
  isRepeat: boolean;
  listSongId: string[];
  isRandom: boolean;
  listSongHeard: string[];
  isAlbum: boolean;
}

const initialState: IMusicState = {
  currentSongId: '',
  played: false,
  duration: null,
  isRepeat: false,
  listSongId: [],
  isRandom: false,
  isAlbum: false,
  listSongHeard: [],
};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setCurSongId: (state, action: PayloadAction<string>) => {
      state.currentSongId = action.payload;
    },
    setDuration: (state, action: PayloadAction<string>) => {
      state.duration = action.payload;
    },
    setPlayed: (state, action: PayloadAction<boolean>) => {
      state.played = action.payload;
    },
    setRepeat: state => {
      state.isRepeat = !state.isRepeat;
    },
    setAlbum: (state, action: PayloadAction<any[]>) => {
      state.listSongId = action.payload;
    },
    setRandom: state => {
      state.isRandom = !state.isRandom;
    },
    setSongHeard: (state, action: PayloadAction<string>) => {
      state.listSongHeard.push(action.payload);
    },
  },
});

export const {
  setCurSongId,
  setPlayed,
  setAlbum,
  setDuration,
  setRepeat,
  setRandom,
  setSongHeard,
} = musicSlice.actions;
export default musicSlice.reducer;
