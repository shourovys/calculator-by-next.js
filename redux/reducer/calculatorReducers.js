import { ADD_NUMBER, CLEAR_ALL, GET_RESULT } from "../contents/calculatorContents";


export const calculatorReducers = (
  state = {
    number:'',
    result:0
  },
  action
) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        number:state.number+action.payload,
        result:0
      }

    case GET_RESULT:
      return { ...state, result:eval(state.number) };

    case CLEAR_ALL:
      return {
        number:'',
        result:0
      };

    default:
      return { ...state, result:eval(state.number) };
  }
};
