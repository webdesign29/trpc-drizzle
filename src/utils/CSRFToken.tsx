"use client";

import { useEffect, useState } from 'react';
import { getCsrfToken } from 'next-auth/react';

export default function CSRFToken() {
  const [ csrfToken, setCsrfToken ] = useState('');

  useEffect(() => {
    getCsrfToken().then((token) => {
      setCsrfToken(token);
    });
  }, []);

  return (
    <input type="hidden" name="csrfToken" value={csrfToken} />
  );
}