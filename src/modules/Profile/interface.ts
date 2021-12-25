export interface IProfile {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  about: string;
  dob: string;
  gender: "male" | "female";
  country: string;
  state: string;
  city: string;
  avatar: string;
  createdAt: string;
  authId: string;
}
