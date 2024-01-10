import axios from "axios";
import { server } from "../main";
import { useDispatch } from "react-redux";
import {
  getLoginRequest,
  getLoginSuccess,
  getLoginFail,
  getRegisterFail,
  getRegisterRequest,
  getRegisterSuccess,
} from "../redux/userSlice";

type RegistrationDetails = {
  name: string;
  email: string;
  password: string;
};

const dispatch = useDispatch();

export const register = async ({
  name,
  email,
  password,
}: RegistrationDetails) => {
  try {
    dispatch(getRegisterRequest());
    const response = await axios.post(
      `${server}/api/user/register`,
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    console.log(response.data);
    const User: UserType = response.data;
    dispatch(getRegisterSuccess(User));
  } catch (error) {
    console.log(error);
    // dispatch(getRegisterFail(error.response.data.message))
  }
};

export const login = async (email: string, password: string) => {
  try {
    dispatch(getLoginRequest());
    const response = await axios.post(
      `${server}/api/user/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    console.log(response.data);
    const User: UserType = response.data;
    dispatch(getLoginSuccess(User));
  } catch (error) {
    console.log(error);
    // dispatch(getLoginFail(error.response.data.message))
  }
};
