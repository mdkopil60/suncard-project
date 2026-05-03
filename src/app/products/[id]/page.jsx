import productsData from "@/data/products.json";
import { notFound, redirect } from "next/navigation";
// BetterAuth এর সেশন ইমপোর্ট করুন (আপনার কনফিগ অনুযায়ী)
// import { auth } from "@/lib/auth"; 

export default async function ProductDetails({ params }) {
  const { id } = params;

  // ১. সেশন চেক (BetterAuth Logic)
  // const session = await auth.getSession();
  // if (!session) {
  //   redirect("/login"); 
  // }

  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12 bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
        {/* Product Image */}
        <div className="lg:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 space-y-6">
          <div className="badge badge-lg badge-primary text-white">{product.category}</div>
          <h1 className="text-4xl font-extrabold text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-500 font-medium italic">Brand: {product.brand}</p>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-blue-600">${product.price}</span>
            <div className="flex items-center text-yellow-500 gap-1 border-l pl-4">
              <span className="text-2xl">⭐</span>
              <span className="text-xl font-bold text-gray-700">{product.rating}</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg">
            {product.description}
          </p>

          <div className="pt-6">
            <button className="btn btn-secondary btn-lg px-12 text-white shadow-lg hover:scale-105 transition-transform">
              Add to Cart
            </button>
            <p className="mt-3 text-sm text-red-500 font-semibold">
              Only {product.stock} items left in stock!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}