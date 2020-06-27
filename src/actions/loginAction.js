import { LOGIN_ACTION } from './type';

export const loginAction = data => ({
    type: LOGIN_ACTION,
    payload: { data }
})
