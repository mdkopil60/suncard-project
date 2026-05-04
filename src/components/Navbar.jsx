'use client';



import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
// import userAvoter from "/assets/user.png"

const Navbar = () => {
    const { data: session , isPending } = authClient.useSession();
    const user = session?.user;

    console.log(user, isPending, "user");
    return (

        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/products'}>products</Link></li>
                        <li><Link href={'/profile'} >My Profile</Link></li>

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-fuchsia-500 font-bold">SunCard</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/products'}>product</Link></li>
                    <li><Link href={'/profile'}>My Profile</Link></li>
                </ul>
            </div>

            { isPending ? <span className="loading loading-spinner text-primary"></span>: user ? (
                <div className="navbar-end">
                    <div className="flex justify-between gap-4 items-center">
                        <h2>Hello {user?.name}</h2>
                        <Image
                            src={user?.image && user.image.startsWith('http') ? user.image :userAvoter}
                            alt="User pic"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <button className="btn bg-primary text-white" onClick={ async()=> await authClient.signOut()}>Logout</button>
                    </div>
                </div>
            ) : (
                <div className="navbar-end">
                    <button className="btn bg-fuchsia-500 text-white">
                        <Link href={"/login"}>Login</Link>
                    </button>
                </div>
            )};
        </div>
    )
}

export default Navbar;