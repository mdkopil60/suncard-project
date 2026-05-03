'use client'

import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';

const RegisterPage = () => {
    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);
    }
    const handleGithubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
        console.log(data);
    }
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleRegisterFun = async (data) => {
        console.log(data, 'data');
        const { email, name, photo, password } = data;
        console.log(name, photo);

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        })
        console.log(res, error);
        if (error) {
            alert(error.message);
        }
        if (res) {
            alert("SingUp Successful");
        }


    }

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

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            className="input"
                            placeholder="Password"
                            {...register("password", { required: "Password field is required" })}
                        />
                        <span className='absolute right-1 top-4 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">Register</button>
                    <div className='flex justify-between'>
                        <button className='btn border-blue-500 text-blue-500' onClick={handleGoogleSignin}>
                            <FaGoogle />
                            Login google
                        </button>
                        <button className='btn border-blue-500 text-blue-500' onClick={handleGithubSignin}>
                            <FaGithub />
                            Login github
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};
export default RegisterPage;