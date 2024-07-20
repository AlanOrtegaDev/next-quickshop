import { navLinks } from '@/constants';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="hidden xl:flex items-center justify-between w-full">
      <ul className="flex ml-14">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              className={classNames(
                'p-4 hover:underline hover:underline-offset-8',
                {
                  'font-semibold underline underline-offset-8':
                    pathname === link.route,
                }
              )}
              href={link.route}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="flex space-x-4">
        <li>
          <Link
            className="py-2 px-3 text-center border rounded"
            href="/sign-in"
          >
            Iniciar sesión
          </Link>
        </li>
        <li>
          <Link
            className="py-2 px-3 text-center shadow-md rounded bg-black text-white"
            href="/sign-up"
          >
            Registrarse
          </Link>
        </li>
      </ul>
    </nav>
  );
}
