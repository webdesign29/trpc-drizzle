'use client';
import React, { useContext, useEffect, useState } from 'react';
import { getCsrfToken, getProviders, signIn } from 'next-auth/react';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSession } from '~/app/sessions.tsx';
import { toast } from 'sonner';
import { AppContext, type AppStoreProps } from '~/store';
import { useStore } from 'zustand';

export default function SignIn({ csrfToken, params }: any) {
  const session = useSession();
  const router = useRouter();
  const [ error, setError ] = useState(null);
  const [ redirectUrl, setRedirectUrl ] = useState('/');
  const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);
  const store = useContext(AppContext);
  if (!store) throw new Error('Missing AppContext.Provider in the tree');
  const appStore = useStore(store, (s: AppStoreProps) => s.APP);

  function togglePasswordVisibility(e) {
    setIsPasswordVisible((prevState) => !prevState);
    e.preventDefault();
  }

  useEffect(() => {
    const url = new URL(location.href);
    setRedirectUrl(url.searchParams.get('callbackUrl')!);
    if (session?.data?.user?.role !== 'guest') {
      console.log('Logged in as', session.data?.user);
      toast.success('Vous êtes connecté.', {
        duration: 1000,
      });
      void router.push(redirectUrl ? redirectUrl : '/');
    }
  }, [ session ]);

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .max(60, 'Doit contenir 60 caractères maximum')
            .email('Email invalide')
            .required('Veuillez saisir votre identifiant de connexion'),
          password: Yup.string().required('Veuillez saisir votre mot de passe'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const res: any = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            // callbackUrl: `${redirectUrl ? redirectUrl : null}`,
          });

          if (res?.error) {
            setError(res.error);
          } else {
            setError(null);
          }
          if (res.url) {
            if (res.url.includes('/api/auth/signin')) {
              res.url = redirectUrl ? redirectUrl : appStore.URL;
            }
            session.refetch();
            void router.push(redirectUrl ? redirectUrl : appStore.URL);
          }
          setSubmitting(false);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div
              className={`flex min-h-screen flex-col items-center px-6 pt-24 ${appStore.THEME?.LOGIN_BG ? appStore.THEME.LOGIN_BG : 'bg-primary'}`}
            >
              {/* <h1 className="font-extrabold tracking-tight text-white sm:text-[3rem] mb-4">
                    Pro <span className="text-[#5ba314]">Bio</span> Terre
                </h1> */}
              <Link href="/">
                Logo ici
                {/* {appStore.LOGO ? (
                  <Image
                    className="mb-8"
                    src={appStore.LOGO}
                    alt="logo"
                    width={300}
                    height={100}
                  />
                ) : null} */}
              </Link>

              <div className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
                <input
                  name="csrfToken"
                  type="hidden"
                  defaultValue={csrfToken}
                />

                <div className="flex items-center justify-center rounded">
                  <div className="text-md mb-3 max-w-sm text-red-400">{error}</div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold uppercase text-gray-600"
                  >
                    Identifiant de connexion (email)
                    <Field
                      name="email"
                      aria-label="enter your email"
                      aria-required="true"
                      type="text"
                      className="mt-2 w-full rounded-sm bg-slate-100 p-3 text-gray-900"
                    />
                  </label>

                  <div className="text-sm text-red-600">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="text-sm font-bold uppercase text-gray-600"
                  >
                    Mot de passe
                    <div className="relative">
                      <Field
                        name="password"
                        aria-label="enter your password"
                        aria-required="true"
                        // type="password"
                        type={isPasswordVisible ? 'text' : 'password'}
                        className="mt-2 w-full rounded-sm bg-slate-100 p-3 text-gray-900"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 -mb-1 flex items-center px-4 text-gray-600"
                        onClick={togglePasswordVisibility}
                      >
                        {isPasswordVisible ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </label>

                  <div className="text-sm text-red-600">
                    <ErrorMessage name="password" />
                  </div>
                </div>

                {session.isLoading ? (
                  <div className="flex items-center justify-center">

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-primary p-3 text-gray-100"
                    >
                      Veuillez patienter...
                    </button>

                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-center">
                      <button
                        type="submit"
                        // className="w-full rounded-lg bg-primary p-3 text-gray-100"
                        className="w-full rounded-lg bg-primary p-3 text-center text-sm font-medium text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:bg-primary dark:hover:bg-primary/80 dark:focus:ring-primary/80"
                      >
                        {formik.isSubmitting ? 'Veuillez patienter...' : 'Se connecter'}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      providers,
      csrfToken,
    },
  };
}
