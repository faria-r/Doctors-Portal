import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const {register,formState: { errors },handleSubmit} = useForm();
  const [loginError,setLoginError] = useState('');
  const handelLogin = (data) => {
    console.log(data);
    signIn(data.email,data.password)
    .then(result =>{
      const user = result.user;
  console.log(user);
    })
    .catch(e => {console.error(e)
    setLoginError(e.message)
    })
  };

  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handelLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: "email address is required" })}
            />
            {errors.email && (
              <p role="alert" className="text-red-500">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "passoword is required",
                minLength: {
                  value: 6,
                  message: "password must be six characters longer",
                },
              })}
            />
            {errors.password && (
              <p role="alert" className="text-red-500">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input
            className="btn btn-accent w-full text-white"
            value="Login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p>
          New to Doctors Portal?{" "}
          <Link className="text-primary" to="/signup">
            Create an Account
          </Link>
        </p>
        <div className="divider">Or</div>
        <button className="btn btn-outline w-full ">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
