import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    const registerError = {
      name: "User creation error",
      message: error.response.statusText,
      data: error.response.data,
      code: error.response.status,
    };
    alert(registerError.name + ". Error code: " + registerError.code);
    throw registerError;
  }
});

const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    const loginError = {
      name: "Login error",
      message: error.response.statusText,
      data: error.response.data,
      code: error.response.status,
    };
    alert(loginError.name + ". Error code: " + loginError.code);
    throw loginError;
  }
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");

    token.unset();
  } catch (error) {
    const logoutError = {
      name: "Logout error",
      message: error.response.statusText,
      data: error.response.data,
      code: error.response.status,
    };
    alert(logoutError.name + ". Error code: " + logoutError.code);
    throw logoutError;
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log("Токена нет, уходим из fetchCurrentUser");
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      const fetchCurrentUserError = {
        name: "Fetch current user error",
        message: error.response.statusText,
        data: error.response.data,
        code: error.response.status,
      };
      alert(
        fetchCurrentUserError.name +
          ". Error code: " +
          fetchCurrentUserError.code
      );
      throw fetchCurrentUserError;
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
