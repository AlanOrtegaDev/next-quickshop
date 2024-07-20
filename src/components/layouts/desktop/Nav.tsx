import { navLinks } from '@/constants';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className='hidden lg:block'>
      <ul className="flex ml-14">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              className={classNames('p-4 hover:underline hover:underline-offset-8', {
                'font-semibold underline underline-offset-8':
                  pathname === link.route,
              })}
              href={link.route}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
