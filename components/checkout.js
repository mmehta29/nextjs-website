"use client";
import styles from './checkout.module.css';
import Header from './header';
import { useState } from 'react';
import { useContext } from "react";
import CartContext from "./store/CartContext";
export default function Checkout() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    let cartctx = useContext(CartContext);
    function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitted(true);
        localStorage.removeItem('cartItems');
        cartctx.removeAllItems();
    }

    return (
        <>
            <Header />
            <div>
                {isSubmitted ? (
                    <div className={styles.successMessage}>
                        Payment Successful! Thank you for your purchase.
                    </div>
                ) : (
                    <form className={styles.checkoutForm} onSubmit={handleSubmit}>
                        <h2 className={styles.heading}>Check Out</h2>

                        <div className={styles.inputContainer}>
                            <label htmlFor="firstName" className={styles.label}>First name</label>
                            <input id="firstName" type="text" name="firstName" className={styles.input} required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="lastName" className={styles.label}>Last name</label>
                            <input id="lastName" type="text" name="lastName" className={styles.input} required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="email" className={styles.label}>Email address</label>
                            <input id="email" type="email" name="email" className={styles.input} required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="cardNumber" className={styles.label}>Card number</label>
                            <input id="cardNumber" type="text" name="cardNumber" className={styles.input} placeholder="Card number" required />
                            <input type="text" placeholder="MM / YY" name="expiry" className={`${styles.input} ${styles.expiry}`} required />
                            <input type="text" placeholder="CVC" name="cvc" className={`${styles.input} ${styles.cvc}`} required />
                        </div>

                        <button type="submit" className={styles.submitButton}>Pay now</button>
                    </form>
                )}
            </div>
        </>
    );
}
