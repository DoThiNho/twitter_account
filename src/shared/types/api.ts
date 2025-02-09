export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

export type UserLoginForm = {
  email: string;
  password: string;
};

export type UserRegisterForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
