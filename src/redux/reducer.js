import { createAction, createReducer } from "@reduxjs/toolkit";

const INCREMENT_NUM = 'INCREMENT_NUM';
const DECREMENT_NUM = 'DECREMENT_NUM';
const RESET_NUM = 'RESET_NUM';
const SET_TEXT = 'SET_TEXT';
const INCREMENT_BY_FIVE = 'INCREMENT_BY_FIVE';
const DECREMENT_BY_FIVE = 'DECREMENT_BY_FIVE';

export const incrementNum = createAction(INCREMENT_NUM);
export const decrementNum = createAction(DECREMENT_NUM);
export const resetNum = createAction(RESET_NUM);
export const setText = createAction(SET_TEXT);
export const incrementByFive = createAction(INCREMENT_BY_FIVE);
export const decrementByFive = createAction(DECREMENT_BY_FIVE);

const initialState = {
    num: 0,
    text: 'Hello World'
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(INCREMENT_NUM, (state) => {
            if (state.num < 15) {
                state.num++;
            }
        })
        .addCase(DECREMENT_NUM, (state) => {
            if (state.num > 0) {
                state.num--;
            }
        })
        .addCase(RESET_NUM, (state) => {
            state.num = 0;
        })
        .addCase(SET_TEXT, (state, action) => {
            state.text = action.payload;
        })
        .addCase(INCREMENT_BY_FIVE, (state) => {
            state.num = Math.min(state.num + 5, 15);
        })
        .addCase(DECREMENT_BY_FIVE, (state) => {
            state.num = Math.max(state.num - 5, 0);
        });
});
