'use client';

import { useStore } from 'zustand';
import { AppContext, type AppStoreProps } from '~/store';
import { useContext } from 'react';

export default function LoggedOut() {
  const store = useContext(AppContext);
  if (!store) throw new Error('Missing AppContext.Provider in the tree');
  const appStore = useStore(store, (s: AppStoreProps) => s.APP);
  return (
    <div
      className={`relative isolate flex-grow overflow-x-hidden overflow-y-scroll bg-primary py-8 sm:py-28`}
    >
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <p className="max-w-2xl text-sm leading-6 text-gray-200 lg:mt-4 lg:text-lg">
            Identifiez-vous pour accéder à votre espace personnel.
          </p>
        </div>
      </div>
    </div>
  );
}
