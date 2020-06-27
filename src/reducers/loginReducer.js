import { LOGIN_ACTION } from "../actions/type";

const initialState = {
  email: "",
  password: "",
  status: false,
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      const { data } = action.payload;
      return {
        ...state,
        email: data.email,
        password: data.password,
        status: true,
      };

    default:
      return state;
  }
}

