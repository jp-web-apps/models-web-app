import { Session } from "@supabase/supabase-js";
import React, {
  createContext,
  ReactNode,
  useEffect,
  useContext,
  useState,
} from "react";
import { supabase } from "../lib";
import { IProfile } from "../modules";

interface AuthContext {
  session: Session | null;
  profile: IProfile | null;
}
const AuthContext = createContext<AuthContext>(null);

interface AuthProvider {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProvider) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<IProfile | null>(null);

  useEffect(() => {
    const loadAuth = async () => {
      const currentSession = supabase.auth.session();
      setSession(currentSession);

      const { data: currentUser } = await supabase
        .from("profiles")
        .select("*")
        .eq("authId", currentSession.user.id)
        .single();
      setProfile(currentUser);
    };

    loadAuth();
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ session, profile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const authContext = useContext(AuthContext);

  if (authContext === null) {
    throw new Error("No FirebaseAuthProvider found.");
  }

  return authContext;
}
