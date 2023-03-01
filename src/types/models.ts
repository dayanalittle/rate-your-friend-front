/* ---------===== custom props ====--------- */



/* ---------===== auth models =====--------- */

export interface Rating {
  id: number;
  value: number;
  profileId: number;
  raterId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  ratingsReceived: Rating[];
}


export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
