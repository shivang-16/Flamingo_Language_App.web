import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: QuizState = {
  loading: false,
  words: [],
  result: [],
};
export const QuizSlice = createSlice({
  name: "Quiz",
  initialState,
  reducers: {
    getWordsRequest: (state) => {
      state.loading = true;
    },
    getWordsSuccess: (state, action: PayloadAction<WordType[]>) => {
      state.loading = false;
      state.words = action.payload;
    },
    getWordsFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    saveResult: (state, action: PayloadAction<string[]>) => {
      (state.loading = false), (state.result = action.payload);
    },
    clearState: (state) => {
      (state.loading = false),
        (state.result = []),
        (state.words = []),
        (state.error = undefined);
    },
  },
});

export const {
  getWordsRequest,
  getWordsSuccess,
  getWordsFail,
  saveResult,
  clearState,
} = QuizSlice.actions;

export default QuizSlice.reducer