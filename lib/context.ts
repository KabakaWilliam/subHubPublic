import { User } from "firebase/auth";
import { createContext } from "react";

interface UserContext {
  loggedInUser: null | undefined | User;
  loggedInUsername: null | string;
}

export const UserContext = createContext<UserContext>({
  loggedInUser: null,
  loggedInUsername: null,
});

interface clientLoadingContext {
  clientLoading: boolean;
}

export const clientLoadingContext = createContext<clientLoadingContext>({
  clientLoading: false,
});
