import Link from "next/link";
import { IoBagHandle } from "react-icons/io5";

export default function Logo() {
    return (
        <Link 
            href={'/'} 
            className="text-xl font-semibold flex justify-end items-center sm:justify-center gap-1"
        >
            <IoBagHandle className="text-primary w-6 h-6" />
            <span className="text-primary mt-1">bagstore</span>
        </Link>
    )
}
