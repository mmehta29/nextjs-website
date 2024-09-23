"use client";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import styles from "./signin.module.css";

export default function SignInPage() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>Welcome To JewlBox!</h1>
        <p className={styles.subtitle}>Please sign in to continue</p>
        <form className={styles.signinForm}
          action={() => signIn("google", { redirectTo: "/" })}>
          <div className={styles.inputGroup}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.button}
              type="submit"
            >
              Sign in with Google
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
{/* <div className={styles.container}>
        <h1 className={styles.title}>Sign In</h1>
        <form className={styles.signinForm}
          action={() => signIn("google", { redirectTo: "/" })}>
          <div className={styles.inputGroup}>
            <button className={styles.button} type="submit">Sign in with Google</button>
          </div>
        </form>
      </div>
    </>
  ); */}
