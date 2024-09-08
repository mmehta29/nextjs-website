import CartPage from "@/components/cartPage";
import Header from "@/components/header";
import { CartContextProvider } from "@/components/store/CartContext";

export default function Cart() {

    return (
        <CartContextProvider>
            <Header />
            <CartPage />
        </CartContextProvider>

    );
}