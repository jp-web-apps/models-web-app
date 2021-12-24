import { useState } from "react";
import { supabase } from "../../lib";
import { Input, Button } from "../../components";

export function SignIn() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-800 w-full min-h-screen flex items-center justify-center">
      <div className="lg:w-6/12">
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex">
          <div className="overflow-hidden w-8/12">
            <img
              src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2012/08/model-fashion-photography-1.jpg?resize=800%2C500&ssl=1"
              alt="cover"
              className="h-full"
            />
          </div>

          <div className="px-8 py-12  w-4/12">
            <h1 className="text-4xl font-bold text-slate-600">Sign In</h1>
            <div className="text-sm text-slate-500 mb-8">
              Log in to start using models.com
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-semibold text-slate-600 mb-2">
                Username
              </h3>
              <Input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-slate-600 mb-2">
                Password
              </h3>
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <Button onClick={handleLogin} disabled={loading}>
                <span>{loading ? "Loading" : "Login"}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
