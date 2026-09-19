import React from 'react';
import Link from "next/link";

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul className='flex'>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                    <li><Link href={"/about"}>About</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;