import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import React from "react";

  type CommandProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };

  export const DashboardCommand = ({open, setOpen}:CommandProps)=>{

return   <CommandDialog open={open} onOpenChange={setOpen}>
<CommandInput placeholder="Type a command or search..." />
<CommandList>
  <CommandEmpty>No results found.</CommandEmpty>
  <CommandGroup heading="Suggestions">
    <CommandItem>Calendar</CommandItem>
    <CommandItem>Search Emoji</CommandItem>
    <CommandItem>Calculator</CommandItem>
  </CommandGroup>
</CommandList>
</CommandDialog>

  }

