import SVGIcon from '@/components/SVGIcon';
import { CloseIcon } from '@/components/icons';
import { navLinks, socialMediaLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classNames from 'classnames';

interface NavMobileProps {
  closeNav: () => void;
  isNavOpened: boolean;
}

function NavMobile({ closeNav, isNavOpened }: NavMobileProps) {
  const pathname = usePathname();

  return (
    <nav
      className={classNames(
        'absolute top-0 left-0 w-full h-dvh pointer-events-none transition-colors duration-500 bg-black overflow-hidden xl:hidden',
        {
          'bg-opacity-85': isNavOpened,
          'bg-opacity-0': !isNavOpened,
        }
      )}
    >
      <div
        className={classNames(
          'flex flex-col ml-auto h-full w-3/4 px-4 bg-white pointer-events-auto transition-transform',
          {
            'translate-x-0': isNavOpened,
            'translate-x-full': !isNavOpened,
          }
        )}
      >
        <div className="flex items-center h-16 border-b">
          <button className="flex ml-auto" onClick={closeNav}>
            <SVGIcon icon={CloseIcon} size={30} />
          </button>
        </div>

        <div className="flex flex-grow flex-col justify-between">
          <ul className="text-right mt-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  className={classNames('inline-block text-xl py-2', {
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

          <div>
            <ul className="mb-4 space-y-4">
              <li>
                <Link
                  className="block text-xl py-2 px-3 text-center border rounded-lg"
                  href="/sign-in"
                >
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link
                  className="block text-xl py-2 px-3 text-center shadow-md rounded-lg bg-black text-white"
                  href="/sign-up"
                >
                  Registrarse
                </Link>
              </li>
            </ul>

            <ul className="flex justify-around mb-4">
              {socialMediaLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.url}>
                    <SVGIcon icon={link.icon} size={32} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavMobile;
