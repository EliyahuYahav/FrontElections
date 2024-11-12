import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status, Users } from "../../types/typeUser";
import axios from "axios";

const BASE_URL_LOGIN = import.meta.env.VITE_BASE_URL_LOGIN;

interface UserState {
    User: Users | null;
    token: string| null;
    status: Status;
    error: string | null;
  }
  
  const initialState: UserState = {
    User: null,
    token: null,
    status: "idle", 
    error: null
  };

  export const login = createAsyncThunk(
    "type/login",
    async (user:Users) => {
      try {
        const response = await axios.post(BASE_URL_LOGIN, user );
        const { token } = response.data;
        if (token) {
          localStorage.setItem("token", token);
        }
        return response.data;
      } catch (err) {
        throw err
      }
    }
  );

export const UserLoginSlice = createSlice({
    name: "User Login",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(login.pending, (state) => {
          state.status = "pending";
          state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
          if (action.payload) {
            console.log(action.payload)
            state.User = action.payload.user;
            state.token = action.payload.token;
          }
          state.status = "fulfilled";
        })
        .addCase(login.rejected, (state) => {
          state.error = "Cannot find user please singUp";
          state.status = "rejected";
        })
    },  
  });

export default UserLoginSlice.reducer;