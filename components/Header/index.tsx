import Link from 'next/link';


const Header = () => {
 return (
   <header className="bg-green-800 text-soft-brown font-extrabold py-4 sticky top-0">
     <nav className="container mx-auto flex justify-between items-center ">
       <Link href="/" className="text-2xl font-bold">
         Nicole
       </Link>
       <ul className="flex justify-between space-x-4">
         <li>
           <Link href="/" className="hover:text-white">
             Home
           </Link>
         </li>
         <li>
           <Link href="/portofolio" className="hover:text-white">
             Portfolio
           </Link>
         </li>
         <li>
           <Link href="/blogs" className="hover:text-white">
             Blog
           </Link>
         </li>
       </ul>
     </nav>
   </header>
 );
};


export default Header;