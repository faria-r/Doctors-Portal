import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const SignUp = () => {
    const {register,  formState:{errors}, handleSubmit}= useForm();
const {createUser} = useContext(AuthContext);
    const handleSignUp = data =>{
        console.log(data);
        createUser(data.email,data.password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(e => console.error(e))
    }
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">SignUp</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" {...register('name',{required:'must provide name'})} className="input input-bordered w-full max-w-xs"/>
            {
            errors.name && <p className="text-red-500">{errors?.name.message}</p>
          }
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register('email',{required:'Must Provide valid email'})} className="input input-bordered w-full max-w-xs"/>
          {
            errors.email && <p className="text-red-500">{errors?.email.message}</p>
          }
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password" {...register('password',{required:'Must Provide Password',
            minLength:{value:6,message:'password must be six character long'},
            pattern:{value:/^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/,message:'password must be strong'}
            })}
              className="input input-bordered w-full max-w-xs"
            />
            {
            errors.password && <p className="text-red-500">{errors?.password.message}</p>
          }
          </div>
          <input
            className="btn btn-accent w-full text-white mb-4"
            value="SingUP"
            type="submit"
          />
        </form>
        <p>
         Already Have an Account?{" "}
          <Link className="text-primary" to="/login">
            Please Login
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

export default SignUp;
