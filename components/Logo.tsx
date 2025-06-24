import { PiggyBank } from 'lucide-react';
import React from 'react';
import Tree from '@/public/Green Tree Sprout.svg';
import Image from 'next/image';

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <Image
        src={Tree}
        className="h-9 w-9 m-1 stroke-[1.5] stroke-black dark:stroke-white"
        alt="logo"
      />
      {/* <Tree  /> */}
      <p className="text-3xl font-bold leading-tight tracking-tighter text-black dark:text-white">
        TrackBud
      </p>
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="text-3xl font-bold leading-tight tracking-tighter text-black dark:text-white">
        TrackBud
      </p>
    </a>
  );
}

export default Logo;
