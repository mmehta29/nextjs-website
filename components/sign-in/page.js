// 'use client';
// import { useState } from 'react';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth } from '@/app/firebase/config';
// import { useRouter } from 'next/navigation';
// import styles from './Signin.module.css';
// import Link from 'next/link';

// const SignIn = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
//     const router = useRouter();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await signInWithEmailAndPassword(email, password);
//             console.log({ res });
//             sessionStorage.setItem('user', true);
//             setEmail('');
//             setPassword('');
//             router.push('/');
//         } catch (e) {
//             console.error(e);
//         }
//     };

//     return (
//         <div className={styles.container}>
//             <h1 className={styles.title}>Sign In</h1>
//             <form onSubmit={handleSubmit} className={styles.signinForm}>
//                 <div className={styles.inputGroup}>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className={styles.input}
//                     />
//                 </div>
//                 <div className={styles.inputGroup}>
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className={styles.input}
//                     />
//                 </div>
//                 <p className={styles.linkTo}>
//                     Make an Account?
//                     <Link href="/sign-up"> Sign up here</Link>
//                 </p>
//                 <button
//                     type="submit"
//                     className={styles.button}
//                 >
//                     Sign In
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default SignIn;
