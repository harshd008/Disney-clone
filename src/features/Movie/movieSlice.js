import { createSlice } from '@reduxjs/toolkit';

const initialState = {
recommend: [], // Initialize with an empty array
newDisney: null,
original: null,
trending: null,
};

const movieSlice = createSlice({
name: 'movie',
initialState,
reducers: {
setMovies: (state, action) => {
state.recommend = action.payload.recommend;
state.newDisney = action.payload.newDisney;
state.original = action.payload.original;
state.trending = action.payload.trending;
},
},
});

export const { setMovies } = movieSlice.actions;

// Returns the array of recommended movies, or an empty array if the recommend property is undefined.
export const selectRecommend = (state) => state.movie.recommend.slice(0,4);

export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;