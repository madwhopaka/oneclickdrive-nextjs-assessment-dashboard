"use client";

import { useUser,SignOutButton } from '@clerk/nextjs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserDropdown = () => {

const { user } = useUser(); 

return (
 <div className='flex items-center justify-center md:space-x-4 h-full md:mx-10'> 
 <div className='font-medium hidden md:block text-[#2e2e2e] text-lg'>Welcome, {user?.firstName}</div>
 <DropdownMenu >
  <DropdownMenuTrigger>
    <Avatar className='md:h-10 md:w-10 h-8 w-8'>
      <AvatarImage src={user?.imageUrl || ""} />
      <AvatarFallback>{ user?.firstName && user?.firstName.charAt(0) }{user?.lastName && user?.lastName.charAt(0)}</AvatarFallback>
    </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='w-30'>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem><Logout /></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
 </div> 
 
  )
}

export default UserDropdown


function Logout() {
  return (
    <SignOutButton redirectUrl="/auth">
      <button>
        Logout
      </button>
    </SignOutButton>
  );
}
