import { FORGOT_PASSWORD_ACTION } from "../actions/type";

const initialState = {
  email: "",
  status: false,
};

export function forgotPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case FORGOT_PASSWORD_ACTION:
      const { data } = action.payload;
      return {
        ...state,
        email: data.email,
        status: true,
      };
    default:
      return state;
  }
}

