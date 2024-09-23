// 'use client';

// import { useState } from 'react';
// import styles from "./Signup.module.css";
// import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
// import { auth } from '../firebase/config';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { useEffect } from 'react';

// const Signup = () => {
//     const router = useRouter();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);
//     const [redirectToSignIn, setRedirectToSignIn] = useState(false);

//     const [createUserWithEmailAndPassword, user, loading, errorMsg] = useCreateUserWithEmailAndPassword(auth);

//     // Handle redirection based on the error state
//     useEffect(() => {
//         if (redirectToSignIn) {
//             router.push('/sign-in');
//         }
//     }, [redirectToSignIn, router]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(null); // Reset error state before a new attempt
//         try {
//             const res = await createUserWithEmailAndPassword(email, password);
//             console.log({ res });
//             sessionStorage.setItem('user', true);
//             setEmail('');
//             setPassword('');
//             router.push('/');
//         } catch (e) {
//             console.error('Error signing up:', e.message);
//             if (e.message.includes('email-already-in-use')) {
//                 // Set a user-friendly error message and trigger redirection
//                 setError('This email is already registered. Please sign in or use a different email.');
//                 setRedirectToSignIn(true); // Trigger redirection
//             } else {
//                 setError(e.message); // Set error state for other errors
//             }
//         }
//     };

//     return (
//         <div className={styles.container}>
//             <h2 className={styles.title}>Sign Up</h2>
//             <form onSubmit={handleSubmit} className={styles.signupForm}>
//                 <div className={styles.inputGroup}>
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className={styles.inputGroup}>
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>

//                 {loading && <p>Loading...</p>}
//                 {error && <p className={styles.error}>{error}</p>}
//                 <p className={styles.linkTo}>
//                     Already have an account?
//                     <Link href="/sign-in"> Sign in here</Link>
//                 </p>
//                 <button type="submit" className={styles.signupBtn} disabled={loading}>
//                     Sign Up
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Signup;
