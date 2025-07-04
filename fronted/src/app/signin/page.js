// app/signin/page.js
'use client';

import { getProviders, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function SignIn() {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const loadProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    loadProviders();
  }, []);

  if (!providers) {
    return <p>Loading providers...</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Sign In</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} style={{ margin: "20px" }}>
          <button
            onClick={() => signIn(provider.id)}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}
