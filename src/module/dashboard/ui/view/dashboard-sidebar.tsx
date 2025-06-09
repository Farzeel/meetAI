"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
    
  } from "@/components/ui/sidebar"

  import {VideoIcon,BotIcon, Star, ChevronDown, } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import DashBoardUserButton from "./dashboardUserButton"



export const DashboardSidebar = ()=>{
  // const pathname = usePathname()
  const pathname = "/meeting"

    const Section = [
        {
          title: "Meeting",
          url: "/meeting",
          icon: VideoIcon,
        },
        {
          title: "Agents",
          url: "/agent",
          icon: BotIcon,
        },
        {
          title: "Upgrade",
          url: "/upgrade",
          icon: Star,
        },
    ]
    return (
        <Sidebar className="w-64 bg-gradient-to-b  from-emerald-800 to-emerald-900 bg-emerald-950 border-0">
        {/* Header */}
        <SidebarHeader className="p-6 border-b border-emerald-700">
          <div className="flex items-center gap-3">
           <Image alt="Meet.AI" width={36} height={36} src={"/logo.svg"}/>
            <h1 className="text-xl text-white font-semibold ">Meet.AI</h1>
          </div>
        </SidebarHeader>
    
 
        {/* Navigation Content */}
     
        <SidebarContent className="p-4">
          <SidebarMenu className="space-y-2">
            {/* Meetings */}
            {Section.map(item=>(
              <SidebarMenuItem key={item.url}>
              <SidebarMenuButton isActive={pathname==item.url} className={`w-full h-12 text-white ${pathname==item.url&&"bg-gradient-to-r from-green-900 to-green-950"}  hover:bg-emerald-700 hover:text-white`}>
                <Link className="flex  gap-2" href={item.url} ><item.icon className="w-5 h-5" />
                <span className='font-medium' >{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            ))}

        
            
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <DashBoardUserButton/>
        </SidebarFooter>
       
      </Sidebar>
    )
}