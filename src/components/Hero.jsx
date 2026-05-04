import Link from "next/link";
import bg from "../assets/summer.webp"

const Hero = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url{bg}",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                        Summer Sale  50% OFF
                    </h1>

                    <p className="mb-5">
                        Discover hot summer deals on sunglasses, outfits, skincare & more!
                    </p>

                    <Link href="/products">
                        <button className="btn btn-primary">Shop Now </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;