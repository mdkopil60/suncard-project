import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="max-w-6xl mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6">Popular Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}