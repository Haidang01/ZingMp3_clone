import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBanner } from '../../../interfaces/music';

interface INewRelease {}

interface IHomeState {
  banner: IBanner[];
  isModalVip: boolean;
}

const initialState: IHomeState = {
  banner: [],
  isModalVip: false,
};

export const homeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    getHomes: (state, action: PayloadAction<IBanner[]>) => {
      state.banner = action.payload;
    },
    setModalVip: state => {
      state.isModalVip = !state.isModalVip;
    },
  },
});
export const { getHomes, setModalVip } = homeSlice.actions;

export default homeSlice.reducer;
