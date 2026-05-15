import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const { registerUser } = useAuth();

    const handleRegistration = (data) =>{
        registerUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold">
            Join <span className="text-primary">Contest</span>Hub!
          </h2>
          <p className="text-sm text-gray-500">
            Please create an account, and explore all features.
          </p>
          <form onSubmit={handleSubmit(handleRegistration)}>
            <fieldset className="fieldset">
              {/* image feild */}
              {/* <label className="label">Image</label>
              <input
                type="file"
                {...register("image", { required: true })}
                className="file-input"
              /> */}

              {/* name feild */}
              <label className="label">Name</label>
              <input
                type="text"
                {...register("name", { required: true})}
                className="input"
                placeholder="Your name"
                />
                {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
              {/* email feild */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
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
                    {errors.password.type === "required" && "Password is required"}
                    {errors.password.type === "minLength" && "Password must be at least 6 characters"}
                    {errors.password.type === "pattern" && errors.password.message}
                  </span>
                )}

              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          <div className="divider -my-1">OR</div>
          {/* Google */}
          <button className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Register with Google
          </button>

          <p className="text-center">
            Already have an account?{" "}
            <a
              href="/login"
              className="link link-hover font-semibold text-primary"
            >
              Login now!
            </a>
          </p>
        </div>
      </div>
    );
};

export default Register;