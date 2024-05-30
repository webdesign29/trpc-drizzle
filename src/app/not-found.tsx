import React from 'react';

const Page = async () => {
  return (
    <>
      <div className="bg-white">
        <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
          <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">

            <p className="text-base font-semibold leading-8 text-primary">Erreur 404</p>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Cette page n'existe pas
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              Désolé, nous n'avons pas pu trouver la page que vous recherchez.
            </p>
          </div>

        </main>
      </div>
    </>
  );
};

export default Page;
