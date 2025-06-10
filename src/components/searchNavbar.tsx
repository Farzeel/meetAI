"use client"
import { Input } from "@/components/ui/input"
import { useSidebar } from "@/components/ui/sidebar"
import { ChevronLeftIcon, ChevronRightIcon, CommandIcon, HamburgerIcon, Menu, PanelLeftIcon, Search } from "lucide-react"
import { DashboardCommand } from "./dashboardCommand"
import React, { useState } from "react"

export const SearchNavbar = () => {

    const {
        state,
        open,
       
 
        isMobile,
        toggleSidebar,
      } = useSidebar()

      const [openn, setOpenn] = useState(false);
      React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
          if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            setOpenn((openn) => !openn)
          }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
      }, [])
  return (

  <>
  <DashboardCommand open={openn} setOpen={setOpenn}/>
    <nav className="flex items-center w-full  bg-[var(--background)] shadow  rounded-xl px-3 py-2  space-x-3">
      {/* App Icon */}
      {isMobile?<button  onClick={toggleSidebar}
        
        className="p-1 bg-white rounded-lg shadow-sm hover:bg-gray-100"
      >
      <PanelLeftIcon className="w-5 h-5 text-[var(--muted-foreground)]" />
      </button>:<button onClick={toggleSidebar}
        
        className="p-1 bg-white rounded-lg shadow-sm hover:bg-gray-100"
      >
        {open  ?<ChevronLeftIcon className="w-5 h-5 text-[var(--muted-foreground)]" />:<ChevronRightIcon className="w-5 h-5 text-[var(--muted-foreground)]" />}
      </button>
}
      {/* Search Input (read-only for modal/command palette trigger) */}
      <div onClick={()=>setOpenn((openn) => !openn)} className="flex items-center w-full md:w-1/3 justify-between bg-black/10 rounded p-2">
        <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
          <Search className="w-4 h-4" />
          <span className="text-sm">Search</span>
        </div>

        <kbd className="text-xs text-[var(--muted-foreground)] bg-[var(--muted)] px-1.5 py-0.5 rounded border">
          ⌘ K
        </kbd>
      </div>
    </nav>
  </>
  )
}
