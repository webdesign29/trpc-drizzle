import ShoppingBagIcon from '@heroicons/react/24/outline/ShoppingBagIcon';
import UserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { cn, removeTrailingSlashes } from '~/lib/utils';
import { useContext } from 'react';
import { useStore } from 'zustand';
import { AppContext, type AppStoreProps } from '~/store';
import { globalState } from '~/components/ui/state';

export function CartIconWithQtyIndicator({ className }: { className?: string }) {
  const [ cart, setCart ] = globalState('cart');
  return (
    <div className={cn('ml-4 mr-4 flow-root lg:ml-6', className)}>
      <Link
        href="/panier"
        className="group relative -m-2 flex items-center p-2"
      >
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-500"
          aria-hidden="true"
        />
        {cart?.items?.length ? (
          <span
            className="top right absolute right-0 top-0 m-0 h-4 w-4 rounded-full bg-red-600 p-0 text-center font-mono text-sm leading-tight text-white">
            {cart?.items?.length ?? 0}
          </span>
        ) : null}
        <span className="sr-only">éléments dans le panier</span>
      </Link>
    </div>
  );
}

export const LogoutBtn = ({
  withText = false,
  className,
}: {
  withText?: boolean;
  className?: string;
}) => {
  const store = useContext(AppContext);
  if (!store) throw new Error('Missing AppContext.Provider in the tree');
  const appStore = useStore(store, (s: AppStoreProps) => s.APP);
  return (
    <>
      <button
        className={cn(
          `relative flex text-slate-400 hover:text-slate-600 focus:text-slate-600 ${withText
            ? 'text-black'
            : 'ml-2 rounded-full p-3 hover:bg-red-50 focus:bg-red-100 focus:ring-2 focus:ring-red-100 focus:ring-offset-2'
          }`,
          className,
        )}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={async () => {
          await signOut({ redirect: false });
          window.location.href = `${appStore.URL}`;
        }}
      >
        <span className="sr-only">Se déconnecter</span>
        {withText ? <span className="mr-6 text-black">Se déconnecter</span> : null}
        <svg
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </button>
    </>
  );
};
export const LoginBtn = ({ className }: { className?: string }) => {
  const store = useContext(AppContext);
  if (!store) throw new Error('Missing AppContext.Provider in the tree');
  const appStore = useStore(store, (s: AppStoreProps) => s.APP);
  return (
    <Link
      href={`${removeTrailingSlashes(appStore.URL)}/login?callbackUrl=${appStore.URL ? encodeURIComponent(appStore.URL) : ''}`}
      className={cn('ml-4 flex whitespace-nowrap', className)}
    >
      Se connecter
      <svg
        // ariaHidden="true"
        className="-mr-1 ml-2 h-5 w-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Link>
  );
};

type ProfileBlockVariant = 'large' | 'small';

export function ProfileBlock({
  session,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'large',
  link = true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = 24,
  className,
}: {
  // session: Session | null;
  session: unknown;
  variant?: ProfileBlockVariant;
  link?: boolean;
  size?: number;
  className?: string;
}) {
  const initials = (session as any)?.user?.name
    ?.split(' ')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    .map((n) => n[0])
    .join('')
    .toUpperCase();
  return (session as any)?.user?.name ? (
    <>
      {link ? (
        <Link
          href={`/manage/profile/equipe`}
          className={cn(
            `relative ml-2 flex rounded-full border p-1 px-3 text-slate-400 shadow-sm hover:bg-slate-50 hover:text-slate-600 focus:bg-slate-100 focus:text-slate-600 focus:ring-2 focus:ring-slate-100 focus:ring-offset-2`,
            className,
          )}
          // signOut
        >
          <span className="sr-only">Profil</span>
          <UserCircleIcon
            className="h-6 w-6"
            aria-hidden="true"
          />
          <span className="font-xs ml-2">{initials}</span>
        </Link>
      ) : (
        <div className={cn(`relative ml-2 flex rounded-full p-1 px-3 text-slate-400 shadow-sm`, className)}>
          <span className="sr-only">Profil</span>
          <UserCircleIcon
            className="h-6 w-6"
            aria-hidden="true"
          />
          <span className="font-xs ml-2">{initials}</span>
        </div>
      )}
    </>

  ) : (
    // <Link
    //   href={`/manage/profile/general`}
    //   className="w-100 align-center hover:text-white focus:text-white">
    //   <button className="inline-flex grow items-center justify-between p-2">
    //     <span className="sr-only">Menu Utilisateur</span>
    //     <div className={`${variant === "large" ? "flex flex-col items-end leading-tight" : "hidden xl:flex xl:flex-col xl:items-end xl:leading-tight"}`}>
    //       {variant === "large" ? <span className="font-semibold">{config.site.brand}</span> : null}
    //       <span className="text-sm">{session?.user.name}</span>
    //     </div>

    //     <span className="rounded-full border border-2 border-gray-400 bg-slate-100 shadow-sm hover:border-primary">
    //       <span className="align-center flex h-10 w-10 justify-center overflow-hidden font-bold text-gray-400">{initials}</span>
    //     </span>
    //   </button>{" "}
    // </Link>
    <></>
  );
}

export function SiteLogo({ className }: { className?: string }) {
  const store = useContext(AppContext);
  if (!store) throw new Error('Missing AppContext.Provider in the tree');
  const appStore = useStore(store, (s: AppStoreProps) => s.APP);
  return (
    <Link
      className={cn('-m-1.5 p-1.5', className)}
      href="/"
    >
      <span className="sr-only">{appStore.BRAND}</span>
      <Image
        className="h-8 min-w-5"
        src={appStore.LOGO}
        priority={true}
        alt="logo"
        // height={450}
        // width={200}
        height={150}
        width={100}
      />
    </Link>
  );
}
