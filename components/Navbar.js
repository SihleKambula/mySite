// Navigation bar 
import Link from 'next/link'

export default function Navbar(){
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='about'>About</Link>
                    </li>
                    <li>
                        <Link href='blog'>Blog</Link>
                    </li>
                    <li>
                        <Link href='projects'>Projects</Link>
                    </li>
                    <li>
                        <Link href='contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}