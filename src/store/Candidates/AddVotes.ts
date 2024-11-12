import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../types/typecCandidates";
import axios from "axios";
import { Users } from "../../types/typeUser";

const VITE_BASE_URL_ADD_VOTE = import.meta.env.VITE_BASE_URL_ADD_VOTE;

interface CandidateState {
    status: Status;
    error: string | null;
  }
  
  const initialState: CandidateState = {
    status: "idle", 
    error: null
  };

  export const AddVotesCandidates = createAsyncThunk(
    "Candidate/AddVote",
    async ({userId, candidatesId}:{userId:string | undefined, candidatesId: string | undefined}): Promise<Users | undefined> => {
      const response = await axios.put(`${VITE_BASE_URL_ADD_VOTE}${userId}/${candidatesId}`);
      return response.data;
    }
  );

export const CandidatesSlice = createSlice({
    name: "Candidates/AddVote",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(AddVotesCandidates.pending, (state) => {
          state.status = "pending";
          state.error = null
      })
      .addCase(AddVotesCandidates.fulfilled, (state) => {
          state.status = "fulfilled";
          state.error = null
        })
        .addCase(AddVotesCandidates.rejected, (state) => {
          state.error = "Cannot fetch Posts";
          state.status = "rejected";
        })
    },
  });

export default CandidatesSlice.reducer;