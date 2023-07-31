"use client"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'




export default function UserLoginOut() {

  const router = useRouter();

  const logout = async () => {
    localStorage.removeItem('token');

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
