import { useAuth } from "../../hooks";
import { SignIn } from "../../modules";
import Custom404 from "../404";

export default function SignInPage() {
  const { session } = useAuth();

  return session ? <Custom404 /> : <SignIn />;
}
