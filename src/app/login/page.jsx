"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Login() {
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        const { error } = await authClient.signIn.email({
            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            window.location.href = "/";
        }
    };

    return (
        <form
            onSubmit={handleLogin}
            className="max-w-md mx-auto py-20 space-y-4"
        >
            <h1 className="text-3xl font-bold">Login</h1>

            <input
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
            />

            <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
            />

            <button className="btn btn-primary w-full">
                Login
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