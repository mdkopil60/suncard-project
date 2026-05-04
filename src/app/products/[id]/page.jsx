import products from "@/data/products.json";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

export default async function ProductDetails({ params }) {
    const resolverParams = await params ;
    const id = resolverParams.id

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (!session) {
        redirect("/login");
    }

  

    const product = products.find(
        (p) => p.id === Number(id)
    );

    if (!product) {
        return notFound();
    }

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="grid md:grid-cols-2 gap-8">

                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={400}
                    className="rounded-xl"
                />

                <div>
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-gray-500">Brand: {product.brand}</p>

                    <p className="text-xl font-bold mt-4">${product.price}</p>

                    <p className="mt-4">{product.description}</p>

                    <p className="text-red-500 mt-3">
                        Only {product.stock} left!
                    </p>

                    <button className="btn btn-primary mt-5">
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
    );
}