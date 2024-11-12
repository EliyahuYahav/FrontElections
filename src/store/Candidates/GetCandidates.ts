import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status, Candidate } from "../../types/typecCandidates";
import axios from "axios";

const BASE_URL_CANDIDATES = import.meta.env.VITE_BASE_URL_CANDIDATES;

interface CandidateState {
    Candidates: Candidate[];
    status: Status;
    error: string | null;
  }
  
  const initialState: CandidateState = {
    Candidates: [],
    status: "idle", 
    error: null
  };

  export const fetchCandidates = createAsyncThunk(
    "Candidate/fetchCandidate",
    async (): Promise<Candidate[] | undefined> => {
      const response = await axios.get(BASE_URL_CANDIDATES);
      return response.data;
    }
  );

export const CandidatesSlice = createSlice({
    name: "Candidates",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(fetchCandidates.pending, (state) => {
          state.status = "pending";
          state.error = null
      })
      .addCase(fetchCandidates.fulfilled, (state, action) => {
          if (action.payload) state.Candidates = action.payload;
          state.status = "fulfilled";
          return state;
        })
        .addCase(fetchCandidates.rejected, (state) => {
          state.error = "Cannot fetch Posts";
          state.status = "rejected";
        })
    },
  });

export default CandidatesSlice.reducer;