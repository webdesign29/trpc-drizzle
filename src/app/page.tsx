import { api } from '~/trpc/server';
import ClientPageComponent from './pageClient';

export default async function Home() {
  const data = await api.example.getAll();

  return <>
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold text-center">Welcome to Drizzle TRPC Starter</h1>
      <p className="text-center">This is a starter template for building a fullstack app with Next.js, Drizzle, and
        TRPC.</p>
    </div>

    <div className="flex flex-col items-center justify-center w-full">
      <h2>
        Data from the server
      </h2>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>

    <hr className="my-2" />

    <div className="container mx-auto">
      <h2>
        Data from the client
      </h2>

      <ClientPageComponent />
    </div>
  </>;
}
