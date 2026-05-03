"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isPending && !session) {
            router.push("/login");
        }
    }, [session, isPending]);

    if (isPending) return <p className="text-center">Loading...</p>;

    return (
        <div className="max-w-md mx-auto py-20 text-center space-y-4">
            <img
                src={session?.user?.image}
                className="w-24 h-24 rounded-full mx-auto"
            />

            <h1 className="text-xl font-bold">{session?.user?.name}</h1>
            <p>{session?.user?.email}</p>

            <a href="/update-profile" className="btn btn-primary">
                Update Profile
            </a>
        </div>
    );
}