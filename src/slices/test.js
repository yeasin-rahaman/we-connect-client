import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  testName:"This is testing state"
}

export const test = createSlice({
  name: 'testState',
  initialState,
  reducers: {
    testFunction1: (state) => {
      state.value += 1
    },
    testFunction2: (state) => {
      state.value -= 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { testFunction1, testFunction2 } = test.actions

export default test.reducer