'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { DisplayFormErrors } from '../display-errors';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/dist/zod';

import CSRFToken from '~/utils/CSRFToken.tsx';
import { useState } from 'react';
import { RegisterData, RegisterSchema } from '~/schema/auth.ts';
import { api } from '~/trpc/react.tsx';
import { toast } from 'sonner';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const registerMutation = api.auth.register.useMutation({
    onSuccess: () => {
      toast.success('Votre compte a été créé avec succès');
      router.push('/login');
    },
    onError: (error) => {
      console.log('error: ', error);
      toast.error(
        'Une erreur s\'est produite lors de la création de votre compte'
      );
    },
  });

  const form = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: 'client1',
      lastName: 'client1',
      email: 'client1@webdesign29.net',
      password: 'totololo',
      confirmPassword: 'totololo',
    }
  });

  async function onSubmit(data: RegisterData) {
    console.log('data', data);
    // const res = await doExport.mutateAsync(data);
    // if (res) {
    //   toast.info("Données en cours d'export", {
    //     position: "top-right",
    //     duration: 1500,
    //   });
    //   // open "filePath" to download the file
    //   if (res.filePath) {
    //     window.open(res.filePath);
    //   }
    // }
    registerMutation.mutate({
      password: data.password,
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
    });
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Créer un compte
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={`flex flex-col bg-white`}
              >
                <CSRFToken />
                {/*<DisplayFormErrors errors={form?.formState?.errors} />*/}
                <div className="flex flex-col space-y-2">

                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {/*First Name*/}
                          Prénom
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="John"
                                 autoCapitalize="none"
                                 autoComplete="username"
                                 autoCorrect="off"
                                 disabled={isLoading}
                                 {...field} />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {/*Last Name*/}
                          Nom
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Doe"
                                 autoCapitalize="none"
                                 autoComplete="username"
                                 autoCorrect="off"
                                 disabled={isLoading}
                                 {...field} />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="name@example.com"
                                 type="email"
                                 autoCapitalize="none"
                                 autoCorrect="off"
                                 autoComplete="email"
                                 disabled={isLoading}
                                 {...field} />
                        </FormControl>
                        <FormDescription>
                          Nous enverrons un email de confirmation à cette adresse.
                        </FormDescription>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Mot de passe
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Créer un mot de passe de 6 caractères minimum"
                                 type="password"
                                 autoCorrect="off"
                                 disabled={isLoading}
                                 {...field} />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Confirmer le mot de passe
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Confirmer votre mot de passe"
                                 type="password"
                                 autoCorrect="off"
                                 disabled={isLoading}
                                 {...field} />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <Button
                    disabled={isLoading}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>
                    )}
                    Créer un compte
                  </Button>
                </div>
              </form>
            </Form>

            <div>
              <div className="relative mt-10">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">Ou se connecter avec</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                      fill="#34A853"
                    />
                  </svg>
                  <span className="text-sm font-semibold leading-6">Google</span>
                </a>

                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                >
                  <svg
                    className="h-5 w-5 fill-[#24292F]"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold leading-6">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Pas encore de compte ?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p> */}
        </div>
      </div>
    </>
  );
}
