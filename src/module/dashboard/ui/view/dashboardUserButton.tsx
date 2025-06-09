import { Skeleton } from "@/components/ui/skeleton"
import { authClient } from "@/lib/auth-client"
import { ChevronDown, CreditCardIcon, LogOutIcon } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
  } from "@/components/ui/dropdown-menu"

import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import GenrateAvatar from "@/components/genrateAvatar"

const DashBoardUserButton = ()=>{
    const router  = useRouter()
    const {data,isPending} = authClient.useSession()

    if(isPending || !data?.user){
        return (
            <div className="flex items-center gap-3">
            <Skeleton className="w-9 h-9 rounded-full bg-emerald-800" />
            <div className="flex flex-col gap-1">
              <Skeleton className="h-4 w-24 bg-emerald-800" />
              <Skeleton className="h-3 w-32 bg-emerald-800" />
            </div>
          </div>
        )
    }



      
   
    const handleLogout = ()=>{
       authClient.signOut({fetchOptions: {
            onSuccess: () => {
                router.push("/sign-in"); 
            },
          },})
    }  
      

return(
<DropdownMenu>
        <DropdownMenuTrigger asChild className="rounded-lg bg-white/10 w-full flex items-center justify-between border border-border/10 hover:bg-white/10 p-3">
          <div className="flex items-center justify-between gap-3 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className=" w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold">
                {data.user.image?(<Avatar  > <AvatarImage src={data.user.image} alt='avatar'></AvatarImage></Avatar>): <GenrateAvatar seed={data.user.name} varient="initials"/>}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{data.user.name}</span>
                <span className="text-xs text-emerald-300">{data.user.email}</span>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-emerald-200" />
          </div>
        </DropdownMenuTrigger>
      
        <DropdownMenuContent  side="top" align="end" className="w-48">
          <DropdownMenuLabel className="text-white">{data.user.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem  className="text-white cursor-pointer flex justify-between items-center">Billing <CreditCardIcon className="size-4"/></DropdownMenuItem>
          {/* <DropdownMenuItem className="text-white">Settings</DropdownMenuItem> */}
          <DropdownMenuItem  onClick={handleLogout} className="text-white cursor-pointer flex justify-between items-center">Logout <LogOutIcon className="size-4"/></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
)
}

export default DashBoardUserButton