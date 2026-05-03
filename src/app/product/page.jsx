import productsData from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Summer Essentials</h1>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Explore our curated collection of summer must-haves. From beachwear to skincare, we've got you covered.
                    </p>
                </div>
            
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {productsData.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}