import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status, Users } from "../../types/typeUser";
import axios from "axios";

const BASE_URL_USERS = import.meta.env.VITE_BASE_URL_USERS;

interface UserState {
    Users: Users[];
    status: Status;
    error: string | null;
  }
  
  const initialState: UserState = {
    Users: [],
    status: "idle", 
    error: null
  };

  export const GetUsers = createAsyncThunk(
    "users/GetUsers",
    async (): Promise<Users[] | undefined> => {
      const response = await axios.get(BASE_URL_USERS);
      return response.data;
    }
  );

export const UsersSlice = createSlice({
    name: "Get All Users",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(GetUsers.pending, (state) => {
          state.status = "pending";
          state.error = null
      })
      .addCase(GetUsers.fulfilled, (state, action) => {
          if (action.payload) state.Users = action.payload;
          state.status = "fulfilled";
        })
        .addCase(GetUsers.rejected, (state) => {
          state.error = "Cannot Get Posts";
          state.status = "rejected";
        })
    },
  });

export default UsersSlice.reducer;