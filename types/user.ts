import { Participant } from "./trip";

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  guid: string;
};

export type UserFriendsContextType = {
  friends: Participant[];
  isLoading: boolean;
};

export type CameraAccessContextType = {
  hasCameraPermission: boolean;
  getCameraPermissions: () => void;
};
