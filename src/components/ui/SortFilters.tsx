"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  // CommandEmpty,
  CommandGroup,
  // CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const sortOptions = [
  {
    value: "sortNewest",
    label: "Newest First",
  },
  {
    value: "sortAscending",
    label: "A-Z",
  },
  {
    value: "sortDescending",
    label: "Z-A",
  },
]

interface sortFilterProps {
  setSortFilter: (value: string) => void
}

const SortFilter: React.FC<sortFilterProps> = ({setSortFilter}) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    setSortFilter(value)
  }, [value])
  return (
    <Popover open={open} onOpenChange={setOpen} >
      <PopoverTrigger asChild className="descriptiveText min-w-[80%] hover:bg-background">
        <Button
        ref={triggerRef}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? sortOptions.find((option) => option.value === value)?.label
            : "Sort by..."}
          <ChevronsUpDown className=" text-primary" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" style={{ width: triggerRef.current ? triggerRef.current.offsetWidth : '200px' }}>
        <Command >
         
          <CommandList >
           
            <CommandGroup  >
              {sortOptions.map((option) => (
                <CommandItem
                className={`w-full ${value === option.value ? "bg-primary" : "bg-background"} focus:bg-black`}
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                 
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { SortFilter }