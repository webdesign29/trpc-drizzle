'use client';
import React, { useRef } from 'react';
import { AppContext, createAppStore } from '~/store';
import { type AppProps } from '~/types';

export default function LayoutClient({ children }: {
  children: React.ReactNode,
  app?: string | null,
  settings?: Partial<AppProps>
}) {
  const store = useRef(createAppStore()).current;
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}
