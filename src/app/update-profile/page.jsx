"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UpdateProfile() {
    const router = useRouter();
    const [error, setError] = useState("");

    const handleUpdate = async (e) => {
        e.preventDefault();
        setError("");
        const form = e.target;
        try {
            await authClient.updateUser({
                name: form.name.value,
                image: form.image.value,
            });
            router.push("/profile");
        } catch (err) {
            setError("Update failed ");
        }
    };

    return (
        <form
            onSubmit={handleUpdate}
            className="max-w-md mx-auto py-20 space-y-4"
        >
            <input
                name="name"
                placeholder="New Name"
                className="input input-bordered w-full"
            />

            <input
                name="image"
                placeholder="New Image URL"
                className="input input-bordered w-full"
            />

            {error && <p className="text-red-500">{error}</p>}

            <button className="btn btn-primary w-full">
                Update Information
            </button>
        </form>
    );
}