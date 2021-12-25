import { useState } from "react";
import { supabase } from "../../lib";
import { Input, Button, Container } from "../../components";
import { useForm } from "react-hook-form";

interface Form {
  email: string;
  password: string;
}

export function SignIn() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Form>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ email, password }: Form) => {
    try {
      setLoading(true);
      const data = await supabase.auth.signIn({ email, password });
      console.log({ data });
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content w-full flex items-center justify-center">
      <Container size="md">
        <form className="px-8 py-12" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-4xl font-bold text-slate-600 text-center">
            Sign In
          </h1>
          <div className="text-sm text-gray-400  text-center mb-8">
            Log in to start the dream in hundredmodels.com
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">
              Username or email:
            </h3>
            <Input
              type="text"
              placeholder="Username or email"
              {...register("email")}
            />
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">
              Password:
            </h3>
            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </div>

          <div>
            <Button rounded type="submit" disabled={loading}>
              <span>{loading ? "Loading" : "Login"}</span>
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
