"use client";

import { authClient } from "@/lib/auth-client";

export default function Profile() {
    const { data: session } = authClient.useSession();

    return (
        <div className="max-w-md mx-auto py-20 text-center">
            <img
                src={session?.user?.image}
                className="w-24 h-24 rounded-full mx-auto"
            />

            <h1>{session?.user?.name}</h1>
            <p>{session?.user?.email}</p>
        </div>
    );
}