import axios from "axios";
import { AuthModel, UserModel } from "./_models";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`;
export const LOGIN_URL = `${API_URL}/login`;
export const REGISTER_URL = `${API_URL}/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`;

const mockUser: UserModel = {
    email: "mock@mail.ua",
    first_name: "Mikle",
    id: 0,
    last_name: "Polovkin",
    password: undefined,
    username: "Polovkin"
}


// Server should return AuthModel
export function login(email: string, password: string) {
    console.log(email);
    console.log(password);
    /*return axios.post<AuthModel>(LOGIN_URL, {
      email,
      password,
    });*/
    return Promise.resolve({
        data: {  api_token: "token",
            refreshToken: 'refreshToken'}

    })
}

// Server should return AuthModel
export function register() {
  /*return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  });*/
    return Promise.resolve({
        data: {  api_token: "token",
            refreshToken: 'refreshToken'}

    })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  });
}

export function getUserByToken(token: string) {
 /* return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  });*/
  return Promise.resolve({data:mockUser});
}
