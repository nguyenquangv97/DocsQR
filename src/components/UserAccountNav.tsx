
import { UserAccountNavProps } from '@/types';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import Image from 'next/image';
import { Icons } from './Icons';
import Link from 'next/link';
import { SignInButton, SignOutButton, useAuth, useClerk } from '@clerk/nextjs';
import { cn } from '@/lib/utils';



const UserAccountNav = ({ name, email, imgUrl }: UserAccountNavProps) => {
  const { sessionId } = useAuth();
  const { signOut } = useClerk();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button className="rounded-full h-8 w-8 aspect-square bg-slate-400">
          <Avatar className="relative w-8 h-8">
            {imgUrl ? (
              <div className="relative aspect-square h-full w-full">
                <Image
                  fill
                  src={imgUrl}
                  alt="profile picture"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <AvatarFallback>
                <span className="sr-only">{name}</span>
                <Icons.user className="h-4 w-4 text-zinc-900" />
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            {name && <p className="font-medium text-sm text-black">{name}</p>}
            {email && (
              <p className="w-[200px] truncate text-xs text-zinc-700">
                {email}
              </p>
            )}
          </div>
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
  
        <Button
          className='p-0 text-red-1 flex justify-center items-center w-full'
          variant="ghost"
          onClick={() => {
            signOut({ redirectUrl: '/' });
          }}
        >
          Sign Out
        </Button>
        {/* </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
