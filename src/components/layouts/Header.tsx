'use client';

import Link from 'next/link';
import SVGIcon from '../SVGIcon';
import { BarsIcon } from '../icons';
import NavMobile from './mobile/Nav';
import NavDesktop from './desktop/Nav';
import { useState } from 'react';

export default function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const handleOpenNav = () => setIsOpenNav(true);

  const handleCloseNav = () => setIsOpenNav(false);

  return (
    <header className="fixed top-0 left-0 h-20 w-full z-50 bg-white">
      <div className="flex justify-between xl:justify-normal items-center px-4 h-full container mx-auto">
        <Link className="text-3xl font-bold" href="/">
          QuickShop!
        </Link>

        <button className="text-black xl:hidden" onClick={handleOpenNav}>
          <SVGIcon icon={BarsIcon} size={32} />
        </button>

        <NavDesktop />
        <NavMobile closeNav={handleCloseNav} isNavOpened={isOpenNav} />
      </div>
    </header>
  );
}
