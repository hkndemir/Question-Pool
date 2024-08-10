import { createSlice } from '@reduxjs/toolkit';
import questionData from '../../utils/questions.json';

const initialState = {
  questions: questionData.questions
};

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateAnswer: (state, action) => {
      const { questionId, selectedAnswer } = action.payload;
      const questionIndex = state.questions.findIndex(q => q.id === questionId);
      
      if (questionIndex !== -1) {
        state.questions[questionIndex].userAnswer = selectedAnswer;
      }
    },
    reset: (state) => {
      state.questions = initialState.questions;
    }
  }
});

export const { updateAnswer, reset } = slice.actions;
export default slice.reducer;