import axios from "axios";
import user from "../apiConstanst/userApiConstant";
export function signUp(data) {
  let response = axios.post(
    process.env.REACT_APP_BASE_URL+user.register,
    data
  );
  return response;
}
export function signIn(data) {
  let response = axios.post(
    process.env.REACT_APP_BASE_URL+user.login,
    data
  );
  return response;
}
export function resetPassword(data) {
  let token = localStorage.getItem("tokenId");
  console.log(token);
  let response = axios.post(
    process.env.REACT_APP_BASE_URL+user.getMail,
    data,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  let resetTok;
  let res = axios.post("http://localhost:4200/resetpassword/$resetTok");

  console.log(res);
  return res;
}
export function setToken(data) {
  let resetPassToken = localStorage.getItem("resetTokenId");
  axios.post(
    process.env.REACT_APP_BASE_URL+user.resetPass,
    data,
    {
      headers: {
        Authorization: resetPassToken,
      },
    }
  );
}
