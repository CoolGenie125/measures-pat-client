import type { RootState } from "../store";

export const selectLoginStatus = (state: RootState) => state.auth.loginStatus;
export const selectErrMsg = (state: RootState) => state.auth.err;
