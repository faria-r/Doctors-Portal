import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const SignUp = () => {
    const {register,  formState:{errors}, handleSubmit}= useForm();
const {createUser,updateUser} = useContext(AuthContext);
const [signUpError,setSignUpError] = useState('');
const navigate = useNavigate();
    const handleSignUp = data =>{
        console.log(data);
        setSignUpError('')
        createUser(data.email,data.password)
        .then(result =>{
            const user = result.user;
            toast('user created Successfully')
            const userInfo={
                displayName:data.name,
            }
            updateUser(userInfo)
            .then(()=>{
              navigate('/')
            })
            .catch(e => console.log(e))
        })
        .catch(e => {
            console.error(e);
            setSignUpError(e.message)
        })
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
            pattern:{value:/^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{6,}$/,message:'password must be strong'}
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
          {
            signUpError && <p>{signUpError}</p>
          }
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
