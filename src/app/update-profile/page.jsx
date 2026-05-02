"use client";

import { authClient } from "@/lib/auth-client";

export default function UpdateProfile() {
    const handleUpdate = async (e) => {
        e.preventDefault();

        const form = e.target;

        await authClient.updateUser({
            name: form.name.value,
            image: form.image.value,
        });

        window.location.href = "/profile";
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

            <button className="btn btn-primary w-full">
                Update Information
            </button>
        </form>
    );
}