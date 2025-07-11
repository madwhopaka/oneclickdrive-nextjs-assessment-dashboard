import React from 'react'
import {
 
  SignInButton,
  SignUpButton, 
} from '@clerk/nextjs';
import { auth } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation';



const AuthPage = async () => {

  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }


  return (
    <div>
      <div className="flex w-full flex-col  items-center h-screen justify-center space-y-4 absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/carRent-lading.jpg')` }}>

         <div className='p-6 flex bg-white flex-col items-center justify-center rounded-lg space-y-4 border-1 '>
              <h1 className="text-4xl sm:text-6xl text-[#6c47ff] font-bold mb-4">CaRent</h1>
           <p className="text-lg sm:text-2xl mb-8">Dashboard Login</p>
          <SignInButton  mode="redirect" forceRedirectUrl="/dashboard">
           <button className="px-6 py-2 bg-[white] text-[#6c47ff] border-1 cursor-pointer rounded-lg text-lg font-medium">
              Sign In
            </button>
          </SignInButton>

          <SignUpButton  mode="redirect" forceRedirectUrl="/dashboard">
            <button className="px-6 py-2 bg-[#6c47ff] text-white cursor-pointer rounded-lg text-lg font-medium">
              Sign Up
            </button>
          </SignUpButton>   
         </div>
        </div>
    </div>
  )
}

export default AuthPage;
