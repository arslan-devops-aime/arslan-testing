export type UserInfoT = {
  firstname: string;
  lastname: string;
  email: string;
  token: string;
};

export type UserT = UserInfoT | undefined;

export type UserLoginCredentilsT = {
  email: string;
  password: string;
};

export type UserSignUpT = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};
