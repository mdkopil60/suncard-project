"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Register() {
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;

        const { error } = await authClient.signUp.email({
            email,
            password,
            name,
            image,
        });

        if (error) {
            setError(error.message);
        } else {
            window.location.href = "/login";
        }
    };

    return (
        <form
            onSubmit={handleRegister}
            className="max-w-md mx-auto py-20 space-y-4"
        >
            <h1 className="text-3xl font-bold">Register</h1>

            <input
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
            />

            <input
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
            />

            <input
                name="image"
                placeholder="Photo URL"
                className="input input-bordered w-full"
            />

            <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
            />

            <button className="btn btn-primary w-full">
                Register
            </button>

            <button
                type="button"
                onClick={() => authClient.signIn.social({
                    provider: "google",
                })}
                className="btn btn-outline w-full"
            >
                Google Login
            </button>

            <p className="text-red-500">{error}</p>
        </form>
    );
}