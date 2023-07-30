import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return <>
    <div className="container flex w-100 justify-between m-10 items-center">
        <div><Image src="./assets/shared/logo.svg" width={48} height={48} alt='icon'/></div>
        <div className="backdrop-blur-sm navbar before:backdrop-blur-sm">
            <nav className='px-10 py-5'>
                <Link className="mx-4"href={"/"}><span className='pr-2'>00</span>Home</Link>
                <Link className="mx-4"href={"/destination"}><span className='pr-2'>01</span>Destination</Link>
                <Link className="mx-4"href={"/crew"}><span className='pr-2'>02</span>Crew</Link>
                <Link className="mx-4"href={"/technology"}><span className='pr-2'>03</span>Technology</Link>
                </nav>
            </div>
    </div>
    </>
};
