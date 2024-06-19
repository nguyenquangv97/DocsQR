import React from 'react';
import { Button, buttonVariants } from './ui/button';

import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex z-40 font-semibold">
              DocsQR
            </Link>
            <Link
              href="/pricing"
            >
              <Button variant="ghost" className="px-20">
                Pricing
              </Button>
            </Link>
          </div>

          {/* // TODO: mobile nav */}

          <div className="flex justify-between items-center space-x-4 sm:flex">
            <SignUpButton>
              <Button variant="ghost">Sign In</Button>
            </SignUpButton>

            <SignInButton>
              <Button
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}
              >
                Sign In
              </Button>
            </SignInButton>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
