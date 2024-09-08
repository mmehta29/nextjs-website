"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from "./image-slideshow.module.css";
import image1 from '@/assets/1.png';
import image4 from '@/assets/2.png';
import image3 from '@/assets/3.png';
import image2 from '@/assets/4.png';

const images = [
    { image: image1, alt: 'shoes', height: 200, weight: 500 },
    { image: image2, alt: 'shoes', height: 200, weight: 500 },
    { image: image3, alt: 'electronics', height: 200, weight: 500 },
    { image: image4, alt: 'jewelry', height: 200, weight: 500 },

];

export default function ImageSlideshow() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex < images.length - 1 ? prevIndex + 1 : 0
            );
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={classes.slideshow}>

            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image.image}
                    className={index === currentImageIndex ? classes.active : ''}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                />
            ))}
        </div>
    );
}