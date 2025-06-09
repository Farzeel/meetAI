"use client"
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
    
import { schema } from '@dicebear/core';
import { micah } from '@dicebear/collection';

export const HomeView = () => {
 const router  = useRouter()
    
      const { data: session } = authClient.useSession() 

      

    if(!session){
      return(
        <>
  <p>loading.......</p>
        </>
      )
    }

  return (
<>

        <h1>{session.user.name}</h1>
        </>
  )
}


