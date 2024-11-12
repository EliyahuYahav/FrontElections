import { configureStore } from "@reduxjs/toolkit";
import CandidateReducer from '../store/Candidates/GetCandidates';
import usersReducer from '../store/Users/GetUsers';
import UserLoginReducer  from "./Users/LoginUser";
import UserRegisterReducer  from "./Users/RegisterUser";
import  AddVotesCandidatesReducer  from "./Candidates/AddVotes";
import removeVotesCandidatesReducer from "./Candidates/removeVotes";

export const store = configureStore({
    reducer: {
        Candidate: CandidateReducer,
        Users: usersReducer,
        Login: UserLoginReducer,
        Register : UserRegisterReducer,
        AddVotes : AddVotesCandidatesReducer,
        RemoveVotes : removeVotesCandidatesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;