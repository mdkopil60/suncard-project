import Link from "next/link";

const Hero = () => {
    return (
        <div className="hero min-h-[80vh] bg-gradient-to-r from-yellow-200 via-orange-200 to-pink-200">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">

                {/* Image */}
                <img
                    src="/assets/hero.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                    alt="summer"
                />

                {/* Text Content */}
                <div>
                    <h1 className="text-5xl font-bold text-orange-600">
                        Summer Sale
                    </h1>
                    <p className="py-6 text-xl">
                        Get up to <span className="font-bold text-red-500">50% OFF</span> on
                        sunglasses, outfits, skincare & more.<br /> Stay cool and stylish this summer!
                    </p>
                    <div className="items-center">
                        <Link href="/products">
                            <button className="btn btn-primary">Shop Now</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hero;