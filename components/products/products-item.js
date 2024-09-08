"use client";

import Image from 'next/image';
import classes from './products-item.module.css';
import { useContext } from 'react';
import CartContext from '../store/CartContext';

export default function ProductItem({ ...product }) {
    const cartctx = useContext(CartContext);
    function handleAddtoCart() {
        console.log('Add to Cart clicked', product);
        cartctx.addItem(product);
    }
    return (
        <article className={classes.product}>
            <header>
                <div className={classes.image}>

                    <Image
                        src={product.image}
                        alt={`${product.title} image`}
                        fill
                    />

                </div>
                <div className={classes.headerText}>
                    <h2>{product.title}</h2>
                </div>
            </header>
            <div className={classes.content}>
                <div className={classes.actions}>
                    <p className={classes.price}>{`$${product.price}`}</p>
                    <button className={classes.button} onClick={handleAddtoCart}>Add to Cart</button>
                </div>
            </div>
        </article>
    );
}