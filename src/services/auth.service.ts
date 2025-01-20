import instance from './base/instance';
import { UserLoginCredentilsT, UserSignUpT } from 'src/types/user';

// Post
export const loginService = async (credentials: UserLoginCredentilsT) => {
  const body = credentials;
  const res = await instance.post('/auth/login', body);
  return res;
};

export const signupService = async (user: UserSignUpT) => {
  const body = {
    first_name: user.firstname,
    last_name: user.lastname,
    email: user.email,
    password: user.password,
  };
  const res = await instance.post('/auth/register', body);
  return res;
};

export const sendOtpService = async({email}: { email: string})=> {
  const res = await instance.post('/auth/generate-otp', {email});
  return res;
}

export const verifyOtpService = async({ email, otp}: { email: string, otp: string}) => {
  const res = await instance.post('/auth/verify-otp', {email, otp});
  return res;
}

export const updatePasswordService = async({ email, password, otp} : {
  email: string, otp: string, password: string
}) => {
  const res = await instance.post('/auth/set-password', {email, otp, password});
  return res;
}