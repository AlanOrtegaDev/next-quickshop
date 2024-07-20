import SVGIcon from '@/components/SVGIcon';
import { CloseIcon } from '@/components/icons';
import { navLinks } from '@/constants';
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
        'absolute top-0 left-0 w-full h-screen pointer-events-none transition-colors duration-500 bg-black overflow-hidden lg:hidden',
        {
          'bg-opacity-85': isNavOpened,
          'bg-opacity-0': !isNavOpened,
        }
      )}
    >
      <div
        className={classNames(
          'ml-auto h-full w-3/4 px-4 bg-white pointer-events-auto transition-transform',
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

        <ul className="text-right mt-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                className={classNames('block text-xl py-2', {
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
      </div>
    </nav>
  );
}

export default NavMobile;
