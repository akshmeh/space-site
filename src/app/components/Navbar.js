import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return <>
    <div className="container flex w-100 justify-between lg:m-10 items-center flex-col lg:flex-row">
        <div className='m-5 lg:m-0'><Image src="./assets/shared/logo.svg" width={48} height={48} alt='icon'/></div>
        <div className="w-full backdrop-blur-sm navbar lg:before:backdrop-blur-sm lg:w-fit">
            <nav className='lg:px-10 py-5 flex justify-evenly lg:justify-center'>
                <Link className="lg:mx-4"href={"/"}><span className='pr-2'>00</span>Home</Link>
                <Link className="lg:mx-4"href={"/destination"}><span className='pr-2'>01</span>Destination</Link>
                <Link className="lg:mx-4"href={"/crew"}><span className='pr-2'>02</span>Crew</Link>
                <Link className="lg:mx-4"href={"/technology"}><span className='pr-2'>03</span>Technology</Link>
                </nav>
            </div>
    </div>
    </>
};
