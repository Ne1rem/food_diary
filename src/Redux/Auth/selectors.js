export const selectToken = (state) => state.auth.token;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectIsError = (state) => state.auth.isError;

export const selectUserInfo = (state) => state.auth.user;
