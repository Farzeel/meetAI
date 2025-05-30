"use client"
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

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
        <button onClick={()=>authClient.signOut({fetchOptions: {
    onSuccess: () => {
      router.push("/sign-in"); 
    },
  },})}>signOut</button>
        <h1>{session.user.name}</h1>
        </>
  )
}


