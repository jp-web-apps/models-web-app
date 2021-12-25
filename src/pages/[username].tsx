import { supabase } from "../lib";
import { Profile } from "../modules";

export default function SignInPage({ profile }) {
  return <Profile profile={profile} />;
}

export async function getServerSideProps({ params }) {
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("username", params.username)
    .single();

  return { props: { profile } };
}
