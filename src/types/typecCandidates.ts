export interface Candidate {
  _id?: string;
  name: string;
  image: string;
  votes: number;
}

export type Status = "idle" | "pending" | "fulfilled" | "rejected";
