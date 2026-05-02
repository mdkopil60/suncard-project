import products from "@/data/products.json";

export default function ProductDetails({ params }) {
    const product = products.find(
        (p) => p.id == params.id
    );

    return (
        <div className="max-w-4xl mx-auto py-10">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
            />

            <h1 className="text-4xl font-bold mt-5">
                {product.name}
            </h1>

            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Category: {product.category}</p>
        </div>
    );
}