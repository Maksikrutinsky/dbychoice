'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AUTH_KEY = 'dbc_admin_auth';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(AUTH_KEY) !== 'true') {
      router.replace('/admin');
    } else {
      setReady(true);
    }
  }, [router]);

  if (!ready) return null;
  return <>{children}</>;
}
