import { pages } from '../lib/pages';
import { SiMonzo } from 'react-icons/si';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav>
        <SiMonzo className='text-[#E5E5E5]' size={32} />
        <ul className='flex gap-4 py-2 md:flex-col md:mt-4'>
          {pages.map((page) => (
            <li className='text-[#737373] text-xl hover:text-[#E5E5E5]'>
              <Link className='focus:text-[#E5E5E5]' href={page.href}>
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
