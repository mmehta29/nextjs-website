'use client';
import Link from "next/link";
import classes from './header.module.css';
import logo from "../cartimage.jpg";
import Image from "next/image";
import { useContext } from "react";
import CartContext from "./store/CartContext";

import { signOut } from "next-auth/react"
// import { signOut } from "firebase/auth";
// import { auth } from "@/app/firebase/config";
export default function Header() {
    const cartctx = useContext(CartContext);
    console.log("manya", cartctx);

    // Ensure cartctx.items is defined and is an array before calling reduce
    const totalItems = Array.isArray(cartctx.items)
        ? cartctx.items.reduce((totalNo, item) => totalNo + item.quantity, 0)
        : 0;

    return (
        <header className={classes.header}>
            <div className={classes.name}>
                <Link href="/" className={classes.logo}>
                    <Image src={logo} alt="logo" width="50" height="50" priority />
                    JewelBox
                </Link>
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link href="/cart">Cart ({totalItems})</Link>
                    </li>
                </ul>
            </nav>
            <button
                className={classes.button}
                type="button" // This prevents default form submission behavior
                onClick={() => signOut({ redirectTo: "/profile" })}
            >
                Sign out
            </button>
        </header>
    );
}
