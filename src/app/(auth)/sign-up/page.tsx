import { auth } from '@/lib/auth'
import SignUpView from '@/module/auth/ui/view/SignUpView'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
    const session = await auth.api.getSession({
        headers: await headers() 
    })
    if(session){
      redirect("/")
    }
return <SignUpView/>
}

export default page
