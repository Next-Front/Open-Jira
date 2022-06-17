
export interface Entry {
  _id: string;
  description: string;
  createdAt: number;
  status: EntryStatus;
}

export type EntryStatus = 'pending' | 'in-progress' | 'done';

export interface EntriesResponse {
  message: string;
  entries?: Entry[];
  entry?: Entry;
}

export interface EntryList {
  _id:         string;
  description: string;
  createdAt:   number;
  status:      string;
  __v:         number;
  updatedAt:   Date;
}