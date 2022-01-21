import { ADD_NUMBER, CLEAR_ALL, GET_RESULT } from "../contents/calculatorContents";

export const addNumber = (target) => ({
  type: ADD_NUMBER,
  payload: target.textContent
});

// Get Room details
export const getResult = (id) => ({
      type: GET_RESULT,
    })

// Clear errors
export const clearAll = () => ({
  type: CLEAR_ALL,
});
