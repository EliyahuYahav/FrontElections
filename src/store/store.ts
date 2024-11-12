import { configureStore } from "@reduxjs/toolkit";
import CandidateReducer from '../store/Candidates/GetCandidates';
import usersReducer from '../store/Users/GetUsers';
import UserLoginReducer  from "./Users/LoginUser";
import UserRegisterReducer  from "./Users/RegisterUser";

export const store = configureStore({
    reducer: {
        Candidate: CandidateReducer,
        Users: usersReducer,
        Login: UserLoginReducer,
        Register : UserRegisterReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;