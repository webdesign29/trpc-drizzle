'use client';

import { useContext } from 'react';
import { useStore } from 'zustand';
import { AppContext, AppStoreProps } from '~/store';
import { api } from '~/trpc/react';

export default function ClientPageComponent() {
  const store = useContext(AppContext);
  if (!store) throw new Error('Missing AppContext.Provider in the tree');
  const appStore = useStore(store, (s: AppStoreProps) => s.APP);

  const exampleData = api.example.getAll.useQuery();
  return (
    <>
      <section className="flex flex-col items-center justify-center w-full ">
        <pre>
          {JSON.stringify(exampleData, null, 2)}
        </pre>
      </section>

      <hr className="my-2" />

      <section className="flex flex-col items-center justify-center w-full">
        <pre>
          {JSON.stringify(appStore, null, 2)}
        </pre>
      </section>
    </>
  );
}