"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from "../components/header";

const SignIn = () => {
  const router = useRouter();
  const [step, setStep] = useState('send'); // 'send' or 'verify'
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  // Handle Facebook login
  const handleFacebookLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
    const redirectUri = `${window.location.origin}/api/auth/facebook/callback`;
    const scope = 'email,public_profile';
    const authUrl = `https://www.facebook.com/v20.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
    window.location.href = authUrl;
  };

  // Handle Google login
  const handleGoogleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectUri = `${window.location.origin}/api/auth/google/callback`;
    const scope = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
    window.location.href = authUrl;
  };

  // Handle sending OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/otp/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneOrEmail }),
      });
      if (res.ok) {
        setStep('verify');
        setError('');
      } else {
        setError('Failed to send OTP');
      }
    } catch (error) {
      setError('Error sending OTP');
    }
  };

  // Handle verifying OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/otp/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneOrEmail, otp }),
      });
      if (res.ok) {
        router.push('/dashboard');
      } else {
        setError('OTP verification failed');
      }
    } catch (error) {
      setError('Error verifying OTP');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Login with Social Media</h2>
            <div className="space-y-4">
              <button
                onClick={handleFacebookLogin}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Login with Facebook
              </button>
              <button
                onClick={handleGoogleLogin}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
              >
                Login with Google
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Login with OTP</h2>
            {step === 'send' ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <input
                  type="text"
                  value={phoneOrEmail}
                  onChange={(e) => setPhoneOrEmail(e.target.value)}
                  placeholder="Phone or Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Send OTP
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Verify OTP
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;