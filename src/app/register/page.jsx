'use client'

import { email } from 'better-auth';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const handleRegisterFun = (data) => {
        console.log(data, 'data');
       
    }
    console.log(errors);
    return (
        <div className='container mx-auto main-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Register your account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFun)}>
                     <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input
                            type="text"
                            className="input"
                            placeholder="Your Name"
                            {...register("name", { required: "Name field is required" })}
                        />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    </fieldset>

                     <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input
                            type="text"
                            className="input"
                            placeholder="Your Photo URL"
                            {...register("photo", { required: "Photo URL field is required" })}
                        />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}

                    </fieldset>



                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input
                            type="email"
                            className="input"
                            placeholder="Your Email"
                            {...register("email", { required: "Email field is required" })}
                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            {...register("password", { required: "Password field is required" })}
                        />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">Register</button>
                   
                </form>
            </div>
        </div>
    );
};
export default RegisterPage;