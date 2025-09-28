import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const LoginLogoutFunctions = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });

        const { data } = await axios.post('https://resume-builder-backend-pi.vercel.app/auth', {
          email: res.data.email,
        });

        const userData = data && data.email ? data : res.data;
        localStorage.setItem('userdata', JSON.stringify(userData));

        // Optional: redirect to verification page if needed
        // if (!userData.verified) {
        //   localStorage.setItem('redirectUrl', window.location.href);
        //   navigate('/verify');
        // } else {
        //   window.location.reload();
        // }

        window.location.reload();
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    onError: (error) => {
      console.error('Google login failed:', error);
    },
    scope: 'openid profile email',
  });

  const logout = () => {
    localStorage.removeItem('userdata');
    window.location.reload();
  };

  return { login, logout };
};

export default LoginLogoutFunctions;
