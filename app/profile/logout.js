"use client"
import { signOut } from "next-auth/react"
import styles from "./signOut.module.css"; // Make sure to import your styles

export default function SignOutPage() {

    return (
        <div className={styles.inputGroup}>
            <button
                className={styles.button}
                type="button" // This prevents default form submission behavior
                onClick={() => signOut({ redirectTo: "/profile" })}
            >
                Sign out
            </button>
        </div>
    );
}

