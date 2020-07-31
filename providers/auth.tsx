import React, { useState, useEffect, useMemo, useContext } from "react";
import { FLO_ACCESS_TOKEN_STORAGE_KEY } from "../const";
import { useDispatch, useSelector } from "react-redux";
import { useApiClient } from "../helpers/api-client";
import * as auth from "../redux/modules/auth";
import { selectPlayerInfoError, selectPlayerInfo } from "../redux/store";
import { useRouter } from "next/router";
import { PlayerRef } from "../types/player";

const AuthContext = React.createContext(null as AuthContextValue);

export interface AuthContextValue {
  authToken: string;
  setAuthToken: (value: string) => void;
  player: PlayerRef;
  signOut: () => void;
}

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const dispatch = useDispatch();
  const [authToken, setAuthToken] = useState(null);
  const player = useSelector(selectPlayerInfo);
  const error = useSelector(selectPlayerInfoError);
  const client = useApiClient();
  const router = useRouter();

  const [signOut] = useMemo(() => {
    const signOut = () => {
      dispatch(auth.signOut());
      router.replace("/setup");
    };
    return [signOut];
  }, [dispatch]);

  useEffect(() => {
    const accessToken = localStorage.getItem(FLO_ACCESS_TOKEN_STORAGE_KEY);
    if (accessToken) {
      setAuthToken(accessToken);
      dispatch(
        auth.fetchPlayerInfo({
          client,
          accessToken,
        })
      );
    } else {
      router.replace("/setup");
    }
  }, []);

  useEffect(() => {
    if (error) {
      router.replace("/setup");
    }
  }, [error]);

  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken,
        player,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const value = useContext(AuthContext);
  return value;
}
