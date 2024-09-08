
import Header from "@/components/header";
import ProductsGrid from "@/components/products/products-grid";
import { CartContextProvider } from "@/components/store/CartContext";
import { getProducts, getProductsByCategory } from "@/lib/products";
import Link from "next/link";
import InputSearch from "@/components/search";
export default function ShopContent({ searchParams }) {

    const query = searchParams?.query || '';
    const categories = getProductsByCategory();

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