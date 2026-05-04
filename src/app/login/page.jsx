'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';

const loginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        // console.log(data);
    }
    const handleGithubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
        // console.log(data);
    }

    const handleLoginFun = async (data) => {
        console.log(data, 'data');

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res, error);
    }
    // console.log(errors);
    return (
        <div className='container mx-auto main-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login your account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFun)}>
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

                    <button className="btn w-full bg-slate-800 text-white">Login</button>

                    <p className='mt-4'>Dont have account? <Link href={'/register'} className='text-blue-500'>Register</Link></p>
                    <div className='flex justify-between'>
                        <button className='btn border-blue-500 text-blue-500' onClick={handleGoogleSignin}>
                            <FaGoogle />
                            Login google
                        </button>

                        <button className='btn border-blue-500 text-blue-500 items-center' onClick={handleGithubSignin}>
                            <FaGithub />
                            Login github
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default loginPage;