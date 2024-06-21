'use client';
// components
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';
import UserAccountNav from './UserAccountNav';

// shadcn components
import { Button, buttonVariants } from './ui/button';
import { Avatar } from './ui/avatar';

// authentication
import { useConvexAuth } from 'convex/react';
import { useUser } from '@clerk/clerk-react';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';

const Navbar = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const { user } = useUser();
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex z-40 font-semibold text-xl">
              DocsQR
            </Link>
            <Link href="/pricing">
              <Button variant="ghost" className="mx-20 text-md font-light">
                Pricing
              </Button>
            </Link>
          </div>

          {/* TODO: mobile nav */}

          {isLoading ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : isAuthenticated ? (
            <UserAccountNav
              name={
                user!.username || user!.fullName
                  ? user!.username || user!.fullName
                  : 'Your Account'
              }
              email={user!.emailAddresses[0].emailAddress}
              imgUrl={user!.imageUrl}
            />
          ) : (
            <div className="flex justify-between items-center space-x-4 sm:flex">
              <SignUpButton>
                <Button variant="ghost">Sign Up</Button>
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
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
