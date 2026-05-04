import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-10">
                Summer Products ☀️
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
}