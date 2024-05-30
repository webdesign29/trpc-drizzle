'use client';
import { useContext, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import { useSession } from '../../../sessions';
import { Button } from '@/components/ui/button';
import { can } from '~/utils/roles';
import { LoginBtn, LogoutBtn, ProfileBlock, SiteLogo } from './fragments';
import { UserSwitcher } from '../../../../components/ui/header/load-user-switcher';
import DropDownMenu from '../../../../components/ui/header/dropdown';
import Notifications from '../../../../components/ui/header/notifications';
import { usePathname, useSearchParams } from 'next/navigation';
import { useStore } from 'zustand';
import { AppContext, type AppStoreProps } from '~/store';

export default function Header({
  menuPositionAbsolute = false,
}: {
  menuPositionAbsolute?: boolean;
}) {
  const store = useContext(AppContext);
  if (!store) throw new Error('Missing AppContext.Provider in the tree');
  const appStore = useStore(store, (s: AppStoreProps) => s.APP);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mobileMenuOpen = appStore.MAIN_MENU.open;
  const setMobileMenuOpen = appStore.MAIN_MENU.setOpen;
  const { data: session, isLoading, refetch } = useSession();
  useEffect(() => {
    if (!session) {
      refetch();
    }
  }, [ refetch, session ]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const url = `${pathname}?${searchParams}`;
    console.log(url);
  }, [ pathname, searchParams ]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'm' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setMobileMenuOpen(!mobileMenuOpen);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [ mobileMenuOpen, setMobileMenuOpen ]);

  return (
    <header
      className={`z-30 bg-white ${menuPositionAbsolute ? 'absolute w-full' : appStore.HEADER_FIXED ? 'fixed top-0 w-full' : 'relative'} `}
    >
      <nav
        className="mx-auto flex h-16 items-center justify-between pl-2 shadow-lg lg:px-8"
        aria-label="Global"
      >
        <div className="ml-2 lg:mr-10">
          <SiteLogo />
        </div>
        {/* darkmode toggle */}
        {/* <ThemeSwitcher theme={darkMode ? Theme.dark : Theme.light}></ThemeSwitcher> */}
        <div className="ml-4 flex justify-start">
          {session ? (
            <>
              <Button
                variant={'outline'}
                className="relative z-50 p-2 pr-0"
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
              >
                <span className="sr-only">Open menu</span>
                <kbd
                  className="pointer-events-none inline-flex h-5 select-none items-center gap-1 whitespace-nowrap rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">ctrl +</span>m
                </kbd>
                <Hamburger
                  size={18}
                  toggled={mobileMenuOpen}
                  toggle={setMobileMenuOpen as any}
                />
              </Button>
            </>
          ) : null}
        </div>

        {/* <Popover.Group className="hidden items-center justify-center lg:flex lg:gap-x-4">
          <Popover className="relative">
            <Popover.Button
              className={`${AppClasses.focus} ${AppClasses.hover} flex items-center gap-x-1 rounded-lg p-2 p-2 text-sm font-semibold leading-6 text-gray-900`}
            >
              Autres
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {otherMenuItems.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group> */}

        <RightSideHeader
          session={session}
          isLoading={isLoading}
        />
      </nav>
    </header>
  );
}

export const RightSideHeader = ({
  session,
  isLoading,
  menu,
  suffix,
  LoginBtnClasses,
}: {
  session: any;
  isLoading: boolean,
  menu?: boolean,
  suffix?: () => JSX.Element;
  LoginBtnClasses?: string;
}) => {
  const store = useContext(AppContext);
  if (!store) throw new Error('Missing AppContext.Provider in the tree');
  const appStore = useStore(store, (s: AppStoreProps) => s.APP);
  const notificationsVisible = appStore.NOTIFICATIONS_MENU?.visible;
  const settingsMenuVisible = appStore.SETTINGS_MENU?.visible;
  const ProfileBlockVisible = appStore.PROFILE_BLOCK?.visible || false;
  const AdminMenuVisible = appStore.ADMIN_MENU?.visible || false;
  const AdminMenuMode = appStore.ADMIN_MENU?.mode || 'inline';
  menu = menu ?? true;
  return (
    <div
      className={`flex flex-1 items-center justify-end gap-x-2 transition-all duration-300  ${isLoading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {AdminMenuVisible ? <span className="hidden md:block">
        {can(session, 'canSwitchUser') ? <UserSwitcher /> : null}
      </span> : null}

      {/* Cart // TODO: display cart again */}
      {/* {session || canAdmin(session) ? null : <CartIconWithQtyIndicator />} */}
      {/* Notification */}
      {/* {session ? (
            <Link
              type="button"
              href={`/manage/activity/done`}
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon
                className="h-6 w-6"
                aria-hidden="true"
              />
            </Link>
          ) : null} */}
      {session ? (
        <>
          <span className="align-center flex">
            {menu && settingsMenuVisible ? <DropDownMenu className="hidden md:flex" /> : null}
            {menu && notificationsVisible ? <Notifications /> : null}
            {ProfileBlockVisible ? <ProfileBlock
              session={session}
              link={appStore.MODE === 'sass-links' ? false : true}
              variant="small"
              className="mr-2"
            /> : null}
            <LogoutBtn className="hidden md:flex" />
          </span>
        </>
      ) : (
        <>
          <LoginBtn className={LoginBtnClasses ? LoginBtnClasses : 'mr-2'} />
        </>
      )}
      {suffix ? suffix() : null}
    </div>
  );
};
