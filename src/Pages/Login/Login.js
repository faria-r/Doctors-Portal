import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const { signIn, loginIWithpopUp, resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const googleAuthProvider = new GoogleAuthProvider();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail,setLoginUserEmail]=useState('');
  const [token] = useToken(loginUserEmail);
  if(token){
    navigate(from, { replace: true });
  }
  const handelLogin = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email)
        
      })
      .catch((e) => {
        console.error(e);
        setLoginError(e.message);
      });
  };
  //log in with google
  const handleLoginWithGoogle = () => {
    loginIWithpopUp(googleAuthProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((e) => console.error(e));
  };

  const handlePassReset = (data) => {
    console.log(data);
    resetPassword(data.email)
      .then(() => {
        toast('please check Your Email and reset Password')
      })
      .catch((e) => console.log(e.message));
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
              <button onClick={handleSubmit(handlePassReset)} className="label-text">
                Forget Password?
              </button>
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
        <button
          onClick={handleLoginWithGoogle}
          className="btn btn-outline w-full "
        >
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
