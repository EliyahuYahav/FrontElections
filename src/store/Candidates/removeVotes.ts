import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Candidate, Status } from "../../types/typecCandidates";
import axios from "axios";
import { Users } from "../../types/typeUser";

const VITE_BASE_URL_REMOVE_VOTE = import.meta.env.VITE_BASE_URL_REMOVE_VOTE;

interface CandidateState {
    status: Status;
    error: string | null;
  }
  
  const initialState: CandidateState = {
    status: "idle", 
    error: null
  };

  export const removeVotesCandidates = createAsyncThunk(
    "Candidate/RemoveVote",
    async ({userId, candidatesId}:{userId:string, candidatesId: string}): Promise<Users | Candidate |undefined> => {
      const response = await axios.put(`${VITE_BASE_URL_REMOVE_VOTE}${userId}/${candidatesId}`);
      return response.data;
    }
  );

export const CandidatesSlice = createSlice({
    name: "Candidate/RemoveVote",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(removeVotesCandidates.pending, (state) => {
          state.status = "pending";
          state.error = null
      })
      .addCase(removeVotesCandidates.fulfilled, (state) => {
          state.status = "fulfilled";
          return state;
        })
        .addCase(removeVotesCandidates.rejected, (state) => {
          state.error = "Cannot fetch Posts";
          state.status = "rejected";
        })
    },
  });

export default CandidatesSlice.reducer;