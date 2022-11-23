import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from '../../Shared/Loading/Loading'

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostingKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostingKey);

  const navigate = useNavigate();

  const {data: specialities, isLoading} = useQuery({
  queryKey:['/speciality'],
  queryFn: async ()=>{
    const res = await fetch('http://localhost:5000/appointmentSpeciality')
    const data = await res.json();
    return data;
  }
});
  const handleAddDoctor = (data) => {
    const image = data.photo[0];
    console.log(image);
    const formData = new FormData();
    formData.append('image',image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
    fetch(url,{
      method:'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgData =>{
      console.log(imgData);
      if(imgData.success){
const doctor = {
    name:data.name,
    email: data.email,
    speciality:data.speciality,
    image:imgData.data.url
}
//sava doctors data to mongo db
fetch('http://localhost:5000/doctors',{
  method:"POST",
  headers:{
    'content-type':'application/json',
    authorization: `bearer ${localStorage.getItem('Access-token')}`
  },
  body: JSON.stringify(doctor)
})
.then(res => res.json())
.then(data =>{
  console.log(data);
  toast.success(`${data.name} is added successfully`);
  navigate('/dashboard/managedoctors')
})
      }
    })

  };


  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div className="w-96 p-7">
      <h2 className="text-4xl font-semibold">Add A Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "must provide name" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && (
            <p className="text-red-500">{errors?.name.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Must Provide valid email" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-500">{errors?.email.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Speciality</span>
          </label>
          <select  {...register("speciality", { required: "Photo is required" })} name='speciality'
           className="select input-bordered w-full max-w-xs">
            <option disabled selected>
              Pick A Speciality
            </option>
            { specialities && 
              specialities.map(speciality => <option
              key={speciality._id}
              vlaue={speciality.name}
              >{speciality.name}</option>)
            }
            
           
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("photo", { required: "Photo is required" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.photo && (
            <p className="text-red-500">{errors?.photo.message}</p>
          )}
        </div>
        <input
          className="btn btn-accent my-4 w-full text-white mb-4"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
