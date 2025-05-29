"use client"

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { data: session } = authClient.useSession() 

  const handleSubmit = async ()=>{

    const { data} = await authClient.signUp.email({
      name,
      email, 
      password,
  
  }, {

      onSuccess: (ctx) => {
          alert("Success")
          console.log(data)
      },
      onError: (ctx) => {
        
          alert(ctx.error.message);
      },
});

  }
if(session){
  return(
    <>
    <button onClick={()=>authClient.signOut()}>signOut</button>
    <h1>{session.user.name}</h1>
    </>
  )
}

  return (
    <>
   <h1 className="">Welcome to MEET AI</h1>

   <div>
    <input placeholder="name" className="border" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <input placeholder="email" className="border" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input placeholder="password" className="border" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button className="cursor-pointer " onClick={handleSubmit}>SignUp</button>
   </div>
    </>


  );
}
