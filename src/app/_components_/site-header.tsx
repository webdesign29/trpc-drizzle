"use client";
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { MainNav } from '~/app/_components_/main-nav.tsx';
import { UserNav } from '~/app/_components_/user-nav.tsx';
import { useSession } from '~/app/sessions.tsx';

export async function SiteHeader() {
  // const session = await auth();

  const { data } = useSession();

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {data ?
              <UserNav />
              : (
                <Link
                  href="/login"
                >
                  <div
                    className={buttonVariants({
                      size: 'icon',
                      variant: 'ghost',
                    })}
                  >
                    <LogIn className="h-5 w-5 " />
                    <span className="sr-only">Sign in</span>
                  </div>
                </Link>
              )}
          </nav>
        </div>
      </div>
    </header>
  );
}