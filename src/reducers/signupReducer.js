import { SIGNUP_ACTION } from "../actions/type";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  status: false,
};

export function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_ACTION:
      const { data } = action.payload;
      return {
        ...state,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        status: true,
      };

    default:
      return state;
  }
}
