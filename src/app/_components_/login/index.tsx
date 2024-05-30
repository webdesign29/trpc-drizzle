'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { DisplayFormErrors } from '../display-errors';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/dist/zod';

import { z } from 'zod';
import CSRFToken from '~/utils/CSRFToken.tsx';
import { useContext, useState } from 'react';
import { LoginData, LoginSchema } from '~/schema/auth.ts';
import { signIn } from 'next-auth/react';
import { useSession } from '~/app/sessions.tsx';
import { AppContext, AppStoreProps } from '~/store.ts';
import { useStore } from 'zustand';
import { toast } from 'sonner';
import { useRouter } from 'next/router';

// export default function SignIn() {
//   const session = useSession();
//   const router = useRouter();
//   const [ error, setError ] = useState(null);
//   const [ redirectUrl, setRedirectUrl ] = useState('/');
//   const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);
//   const store = useContext(AppContext);
//   if (!store) throw new Error('Missing AppContext.Provider in the tree');
//   const appStore = useStore(store, (s: AppStoreProps) => s.APP);
//
//   function togglePasswordVisibility(e) {
//     setIsPasswordVisible((prevState) => !prevState);
//     e.preventDefault();
//   }
//
//   useEffect(() => {
//     const url = new URL(location.href);
//     setRedirectUrl(url.searchParams.get('callbackUrl')!);
//     if (session?.data?.user?.role && session?.data?.user?.role !== 'guest') {
//       console.log('Logged in as', session.data?.user);
//       toast.success('Vous êtes connecté.', {
//         duration: 1000,
//       });
//       void router.push(redirectUrl ? redirectUrl : '/');
//     }
//   }, [ session ]);
//
//   return (
//     <>
//       <Formik
//         initialValues={{ email: '', password: '' }}
//         validationSchema={Yup.object({
//           email: Yup.string()
//             .max(60, 'Doit contenir 60 caractères maximum')
//             .email('Email invalide')
//             .required('Veuillez saisir votre identifiant de connexion'),
//           password: Yup.string().required('Veuillez saisir votre mot de passe'),
//         })}
//         onSubmit={async (values, { setSubmitting }) => {
//           const res: any = await signIn('credentials', {
//             redirect: false,
//             email: values.email,
//             password: values.password,
//             // callbackUrl: `${redirectUrl ? redirectUrl : null}`,
//           });
//
//           if (res?.error) {
//             setError(res.error);
//           } else {
//             setError(null);
//           }
//           if (res.url) {
//             if (res.url.includes('/api/auth/signin')) {
//               res.url = redirectUrl ? redirectUrl : appStore.URL;
//             }
//             session.refetch();
//             void router.push(redirectUrl ? redirectUrl : appStore.URL);
//           }
//           setSubmitting(false);
//         }}
//       >
//         {(formik) => (
//           <form onSubmit={formik.handleSubmit}>
//             <div
//               className={`flex min-h-screen flex-col items-center px-6 pt-24 ${appStore.THEME?.LOGIN_BG ? appStore.THEME.LOGIN_BG : 'bg-primary'}`}
//             >
//               {/* <h1 className="font-extrabold tracking-tight text-white sm:text-[3rem] mb-4">
//                     Pro <span className="text-[#5ba314]">Bio</span> Terre
//                 </h1> */}
//               <Link href="/">
//                 Logo ici
//                 {/* {appStore.LOGO ? (
//                   <Image
//                     className="mb-8"
//                     src={appStore.LOGO}
//                     alt="logo"
//                     width={300}
//                     height={100}
//                   />
//                 ) : null} */}
//               </Link>
//
//               <div className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
//                 <CSRFToken />
//
//                 <div className="flex items-center justify-center rounded">
//                   <div className="text-md mb-3 max-w-sm text-red-400">{error}</div>
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="email"
//                     className="text-sm font-bold uppercase text-gray-600"
//                   >
//                     Identifiant de connexion (email)
//                     <Field
//                       name="email"
//                       aria-label="enter your email"
//                       aria-required="true"
//                       type="text"
//                       className="mt-2 w-full rounded-sm bg-slate-100 p-3 text-gray-900"
//                     />
//                   </label>
//
//                   <div className="text-sm text-red-600">
//                     <ErrorMessage name="email" />
//                   </div>
//                 </div>
//                 <div className="mb-6">
//                   <label
//                     htmlFor="password"
//                     className="text-sm font-bold uppercase text-gray-600"
//                   >
//                     Mot de passe
//                     <div className="relative">
//                       <Field
//                         name="password"
//                         aria-label="enter your password"
//                         aria-required="true"
//                         // type="password"
//                         type={isPasswordVisible ? 'text' : 'password'}
//                         className="mt-2 w-full rounded-sm bg-slate-100 p-3 text-gray-900"
//                       />
//                       <button
//                         type="button"
//                         className="absolute inset-y-0 right-0 -mb-1 flex items-center px-4 text-gray-600"
//                         onClick={togglePasswordVisibility}
//                       >
//                         {isPasswordVisible ? (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth={1.5}
//                             stroke="currentColor"
//                             className="h-5 w-5"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
//                             />
//                           </svg>
//                         ) : (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth={1.5}
//                             stroke="currentColor"
//                             className="h-5 w-5"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
//                             />
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                             />
//                           </svg>
//                         )}
//                       </button>
//                     </div>
//                   </label>
//
//                   <div className="text-sm text-red-600">
//                     <ErrorMessage name="password" />
//                   </div>
//                 </div>
//
//                 {session.isLoading ? (
//                   <div className="flex items-center justify-center">
//
//                     <button
//                       type="submit"
//                       className="w-full rounded-lg bg-primary p-3 text-gray-100"
//                     >
//                       Veuillez patienter...
//                     </button>
//
//                   </div>
//                 ) : (
//                   <>
//                     <div className="flex items-center justify-center">
//                       <button
//                         type="submit"
//                         // className="w-full rounded-lg bg-primary p-3 text-gray-100"
//                         className="w-full rounded-lg bg-primary p-3 text-center text-sm font-medium text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:bg-primary dark:hover:bg-primary/80 dark:focus:ring-primary/80"
//                       >
//                         {formik.isSubmitting ? 'Veuillez patienter...' : 'Se connecter'}
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           </form>
//         )}
//       </Formik>
//     </>
//   );
// }

export default function LoginPage() {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const session = useSession();

  const [ redirectUrl, setRedirectUrl ] = useState('/');

  const store = useContext(AppContext);
  if (!store) throw new Error('Missing AppContext.Provider in the tree');
  const appStore = useStore(store, (s: AppStoreProps) => s.APP);
  const router = useRouter();


  const form = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: 'client1@webdesign29.net',
      password: 'totololo',
    }
  });

  async function onSubmit(data: LoginData) {
    console.log('data', data);

    const res: any = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
      // callbackUrl: `${redirectUrl ? redirectUrl : null}`,
    });
    if (res?.error) {
      // setError(res.error);
      toast.error(
        "Une erreur s'est produite lors de la connexion. Veuillez réessayer.",
        {
          duration: 5000,
        }
      );
    } else {
      // setError(null);
    }
    if (res.url) {
      if (res.url.includes('/api/auth/signin')) {
        res.url = redirectUrl ? redirectUrl : appStore.URL;
      }
      // session.refetch();
      void router.push(redirectUrl ? redirectUrl : appStore.URL);
    }
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
            Connexion
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
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block text-sm leading-6 text-gray-900"
                    >
                      Se souvenir de moi
                    </label>
                  </div>

                  <div className="text-sm leading-6">
                    <Link
                      href="/mot-de-passe-oublie"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Mot de passe oublié ?
                    </Link>
                  </div>
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
