'use client'

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const loginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const handleLoginFun = (data) => {
        console.log(data, 'data');
    }
    console.log(errors);
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

                    <button className="btn w-full bg-slate-800 text-white">Login</button>

                    <p className='mt-4'>Don't have account? <Link href={'/register'} className='text-blue-500'>Register</Link></p>

                </form>

            </div>

        </div>
    );
};

export default loginPage;