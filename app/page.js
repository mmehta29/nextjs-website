import ImageSlideshow from "@/components/images/image-slideshow";
import Link from "next/link";
import Background from "../components/background";
import Header from "../components/header";
import classes from "./page.module.css";
import { CartContextProvider } from "@/components/store/CartContext";
// import Image from 'next/image';
import image1 from '@/assets/1.png';
export default function Home() {
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