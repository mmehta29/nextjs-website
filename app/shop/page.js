
import Header from "@/components/header";
import ProductsGrid from "@/components/products/products-grid";
import { CartContextProvider } from "@/components/store/CartContext";
import { getProducts, getProductsByCategory } from "@/lib/products";
export default function ShopContent() {

    const products = getProducts();
    return (
        <CartContextProvider>
            <Header />

            <main>
                {/* <InputSearch /> */}
                <ProductsGrid products={products} />

            </main>
        </CartContextProvider>
    );
}