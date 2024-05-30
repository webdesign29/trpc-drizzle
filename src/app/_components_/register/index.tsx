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
import { useRouter } from 'next/navigation';
import { LoaderCircle } from 'lucide-react';

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
                        <FormMessage />
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
                        <FormMessage />
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
                        <FormMessage />
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
                        <FormMessage />
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
                        <FormMessage />
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
                      <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Créer un compte
                  </Button>
                </div>

                <div className="text-sm text-center leading-6 my-2">
                  <Link
                    href="/login"
                    className="font-normal text-indigo-600 hover:text-indigo-500"
                  >
                    Vous avez déjà un compte ? Connectez-vous
                  </Link>
                </div>
              </form>
            </Form>
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
