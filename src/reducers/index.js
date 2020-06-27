import { loginReducer } from "./loginReducer";
import { signupReducer } from './signupReducer'
import { combineReducers } from 'redux';
import { forgotPasswordReducer } from './forgotPasswordReducer'
export default combineReducers({
    loginReducer,
    signupReducer,
    forgotPasswordReducer
})