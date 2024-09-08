import manyaImg from '@/background2.jpg';
import classes from './background.module.css';
import Image from "next/image";
export default function Background() {
    return (
        <div>
            <Image src={manyaImg} alt="a plate with food" priority />
        </div>
    );
}