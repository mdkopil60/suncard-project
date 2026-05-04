import Image from "next/image";

export default function TopBrands() {
    return (
        <section className="py-14 bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100">
            <div className="max-w-6xl mx-auto px-4">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-10">
                    Top Brands
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {/* Card 1 */}
                    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                        <figure className="pt-6">
                            <Image
                                src="/assets/Roles.png"
                                alt="H&M"
                                width={90}
                                height={90}
                                className="object-contain"
                            />
                        </figure>
                        <div className="card-body text-center">
                            <h3 className="card-title justify-center">H&M</h3>
                            <p className="text-sm text-gray-500">Summer Outfits</p>
                            <p className="text-sm">Trendy, lightweight outfits for hot days.</p>
                            <button className="btn btn-warning btn-sm mt-3 text-white">Explore</button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                        <figure className="pt-6">
                            <Image
                                src="/assets/pic-2.png"
                                alt="Zara"
                                width={90}
                                height={90}
                                className="object-contain"
                            />
                        </figure>
                        <div className="card-body text-center">
                            <h3 className="card-title justify-center">Zara</h3>
                            <p className="text-sm text-gray-500">Summer Outfits</p>
                            <p className="text-sm">Trendy, lightweight outfits for hot days.</p>
                            <button className="btn btn-warning btn-sm mt-3 text-white">Explore</button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                        <figure className="pt-6">
                            <Image
                                src="/assets/img4.png"
                                alt="Nivea"
                                width={90}
                                height={90}
                                className="object-contain"
                            />
                        </figure>
                        <div className="card-body text-center">
                            <h3 className="card-title justify-center">Nivea</h3>
                            <p className="text-sm text-gray-500">Skincare</p>
                            <p className="text-sm">Keep your skin hydrated & protected.</p>
                            <button className="btn btn-warning btn-sm mt-3 text-white">Explore</button>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                        <figure className="pt-6">
                            <Image
                                src="/assets/unSun.webp"
                                alt="Decathlon"
                                width={90}
                                height={90}
                                className="object-contain"
                            />
                        </figure>
                        <div className="card-body text-center">
                            <h3 className="card-title justify-center">Decathlon</h3>
                            <p className="text-sm text-gray-500">Beach Gear</p>
                            <p className="text-sm">All-in-one summer outdoor essentials.</p>
                            <button className="btn btn-warning btn-sm mt-3 text-white">Explore</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}