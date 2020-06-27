import { FORGOT_PASSWORD_ACTION } from "./type";

export const forgotPasswordAction = (data) => ({
    type: FORGOT_PASSWORD_ACTION,
    payload: { data },
});
