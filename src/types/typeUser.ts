export interface Users {
  username: string;
  password: string;
  isAdmin?: Boolean;
  hasVoted?: Boolean;
  votedFor?: string | null;
  _id?: string;
}

export type Status = "idle" | "pending" | "fulfilled" | "rejected"