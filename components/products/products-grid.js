import classes from "./products-grid.module.css";
import ProductItem from "./products-item";

export default function ProductsGrid({ products }) {
    return (
        <ul className={classes.products}>
            {products.map((product) => (
                <li key={product.id}>
                    <ProductItem {...product} />
                </li>
            ))}
        </ul>
    );
}
