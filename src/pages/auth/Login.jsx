import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';

const Login = () => {

      const {register, handleSubmit, formState: { errors }} = useForm();
      const { signInUser } = useAuth();

      const handleSignIn = (data) => {
        signInUser(data.email, data.password)
          .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            console.error(error);
          });
      };

    return (
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold">
            Welcome back <span className="text-primary">Contest</span>Hub!
          </h2>
          <p className="text-sm text-gray-500">
            Please login your account.
          </p>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <fieldset className="fieldset">
              
              {/* email feild */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
              {/* password feild */}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                    message:
                      "Password must contain uppercase, lowercase and number",
                  },
                })}
                className="input"
                placeholder="Password"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.type === "required" &&
                    "Password is required"}
                  {errors.password.type === "minLength" &&
                    "Password must be at least 6 characters"}
                  {errors.password.type === "pattern" &&
                    errors.password.message}
                </span>
              )}

              <button className="btn btn-neutral mt-4 mr-4">Sign In</button>
            </fieldset>
          </form>
          <div className="divider -my-0.5 mr-4">OR</div>
          
          {/* Social Login (Google login) */}
                    <SocialLogin></SocialLogin>

          <p className="text-center">
            You don't have an account?{" "}
            <a
              href="/register"
              className="link link-hover font-semibold text-primary"
            >
              Register now!
            </a>
          </p>
        </div>
      </div>
    );
};

export default Login;