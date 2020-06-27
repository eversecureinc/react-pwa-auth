import { SIGNUP_ACTION } from './type';

export const signupAction = data => ({
    type: SIGNUP_ACTION,
    payload: { data }
})
