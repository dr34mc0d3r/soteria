"use client"
import { useEffect, useState, useReducer } from "react";
import { useRouter } from 'next/navigation'
import reducerOne from '@/app/user/reducer';




export default function UserLoginOut() {

  const router = useRouter();

  const [authenticated, dispatch] = useReducer(reducerOne, {});

  const logout = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    dispatch({ type: "logout" });

    // route to the login page
    router.push('/user/login');

  }

  useEffect(() => {
    logout();
  }, []);


  return (
    <div>

Login out

      
    </div>
  );
}
