import { LoadingSpinner } from "@/components/Spinner";
import { getFriends } from "@/dal/user";
import { usePromiseWithLoading } from "@/hooks";
import { Participant } from "@/types/trip";
import { UserFriendsContextType } from "@/types/user";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserFriendsContext = createContext<UserFriendsContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

const UserFriendsProvider = ({ children }: Props) => {
  const [friends, setFriends] = useState<Participant[]>([]);

  const [get, isLoading] = usePromiseWithLoading(getFriends, setFriends);

  useEffect(() => {
    get();
  }, []);

  const value: UserFriendsContextType = {
    friends,
    isLoading,
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <UserFriendsContext.Provider value={value}>
      {children}
    </UserFriendsContext.Provider>
  );
};

const useUserFriends = () => {
  const context = useContext(UserFriendsContext);

  if (!context) {
    throw new Error("Cannot use useUserFriends without provider");
  }

  return context;
};

export { UserFriendsProvider, useUserFriends };
