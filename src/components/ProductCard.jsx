import Link from "next/link";

const ProductCard = ({ product }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={product.image} alt={product.name} />
            </figure>

            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}</p>

                <Link
                    href={`/products/${product.id}`}
                    className="btn btn-primary"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;