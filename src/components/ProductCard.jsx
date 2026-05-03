import Link from "next/link";

const ProductCard = ({ product }) => {
    const { id, name, image, price, rating, category } = product;

    return (
        <div className="card card-compact bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
            <figure className="h-56 bg-gray-100">
                <img src={image} alt={name} className="object-cover w-full h-full" />
            </figure>
            <div className="card-body">
                <div className="badge badge-secondary badge-outline">{category}</div>
                <h2 className="card-title text-gray-800">{name}</h2>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-xl font-bold text-blue-600">${price}</span>
                    <div className="flex items-center gap-1">
                        <span className="text-yellow-500 text-lg">⭐</span>
                        <span className="font-semibold text-gray-600">{rating}</span>
                    </div>
                </div>
                <div className="card-actions justify-end mt-4">
                    <Link href={`/products/${id}`} className="btn btn-primary btn-block text-white">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;