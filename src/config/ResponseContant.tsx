export const LoginResponse = {
  NoExist: 0, //data doesn't exist in db
  NoMatch: 1, //password is incorrect
  Success: 2, //request success
};

export const RegisterResponse = {
  Fail: 0, //resgister action failed
  Success: 1, //success
};
