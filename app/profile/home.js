import Header from "@/components/header";
import ImageSlideshow from "@/components/images/image-slideshow";
import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useAuthState } from "react-firebase-hooks/auth";

// import { auth } from "./firebase/config";
import classes from "./home.module.css";

export default function HomePageApplication() {
    return (
        <>
            <Header />
            <header>
                <ImageSlideshow />
                <div className={classes.hero}>
                    <h2>Support Local Everything</h2>
                </div>

                <div className={classes.buttonContainer}>
                    <Link href="/shop">
                        <button className={classes.buyNowButton}>Buy Now</button>
                    </Link>
                </div>
            </header>
        </>
    );
}