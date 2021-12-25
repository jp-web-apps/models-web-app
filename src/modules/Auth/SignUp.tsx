import { useState } from "react";
import { supabase } from "../../lib";
import { Input, Button } from "../../components";
import { useForm } from "react-hook-form";

interface Form {
  username: string;
  email: string;
  password: string;
}

export function SignUp() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Form>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ email, password }: Form) => {
    try {
      setLoading(true);
      const supbaseData = await supabase.auth.signUp({ email, password });
      console.log({ supbaseData });
      //   if (error) throw error;
      //   alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 w-full min-h-screen flex items-center justify-center">
      <div className="lg:w-6/12">
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex">
          <div className="overflow-hidden w-8/12">
            <img
              src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2012/08/model-fashion-photography-1.jpg?resize=800%2C500&ssl=1"
              alt="cover"
              className="h-full"
            />
          </div>

          <form
            className="px-8 py-12  w-4/12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-4xl font-bold text-slate-600">Sign Up</h1>
            <div className="text-sm text-slate-500 mb-8">
              Log in to start using models.com
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-semibold text-slate-600 mb-1">
                Username
              </h3>
              <Input
                type="text"
                placeholder="Username"
                {...register("username")}
              />
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-semibold text-slate-600 mb-1">
                Email
              </h3>
              <Input type="text" placeholder="Email" {...register("email")} />
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-slate-600 mb-1">
                Password
              </h3>
              <Input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
            </div>

            <div>
              <Button type="submit" disabled={loading}>
                <span>{loading ? "Loading" : "Sign up"}</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
