import { api } from '~/trpc/server';
import ClientPageComponent from './pageClient';

export default async function Home() {
  const data = await api.example.getAll();

  return <>
    <div className="container mx-auto">
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      <h1 className="text-3xl font-bold text-center">Welcome to Drizzle TRPC Starter</h1>
      <p className="text-center">This is a starter template for building a fullstack app with Next.js, Drizzle, and
        TRPC.</p>
    </div>
    <div className="container mx-auto">
      <ClientPageComponent />
    </div>
  </>;
}
