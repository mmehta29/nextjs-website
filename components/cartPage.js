'use client';

import { useContext } from "react";
import CartContext from "./store/CartContext";
import styles from './cartPage.module.css';

import axios from "axios";

export default function CartPage() {
    let cartctx = useContext(CartContext);

    const cartTotal = cartctx.items.reduce((totalPrice, item) => {
        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 0;
        return totalPrice + (quantity * price);
    }, 0);

    const handleRemoveItem = (id) => {
        cartctx.removeItem(id);
    }

    const handleClearCart = () => {
        localStorage.removeItem('cartItems');
        cartctx.removeAllItems(); // Ensure you have a method to clear items from context
    };

    if (cartctx.items.length === 0) {
        return <p className={styles.empty}>Your cart is empty.</p>;
    }

    const handleCheckout = async () => {
        const items = cartctx.items.map(item => ({
            title: item.title,
            price: item.price,
            quantity: item.quantity
        }));

        try {
            const res = await axios.post('/api/checkout', { items });
            window.location = res.data.sessionURL;
        } catch (err) {
            console.error(err);
            alert("An error occurred during checkout. Please try again.");
        }
    };

    return (
        <main className={styles.box}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Cart</h2>
                <ul className={styles.itemList}>
                    {cartctx.items.map(item => (
                        <li key={item.id} className={styles.item}>
                            {item.title} - {item.quantity}
                            <div className={styles.distance}>
                                <button
                                    className={styles.removeButton}
                                    onClick={() => handleRemoveItem(item.id)}>
                                    -
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <p className={styles.total}>
                    Total: ${cartTotal.toFixed(2)}
                </p>
                <p>
                    <button onClick={handleCheckout} className={styles.clearButton}>Checkout</button>
                </p>
                <button onClick={handleClearCart} className={styles.clearButton}>Clear Cart</button>
            </div>
        </main>
    );
}
