import React, { useState } from "react"
import { cn } from "@/lib/utils"

const Popover = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative inline-block text-left">
      {React.Children.map(children, child => {
        if (child.type === PopoverTrigger) {
          return React.cloneElement(child, { onClick: () => setIsOpen(!isOpen) });
        }
        if (child.type === PopoverContent) {
          return isOpen ? React.cloneElement(child, { setIsOpen }) : null;
        }
        return child;
      })}
    </div>
  )
}

const PopoverTrigger = ({ children, onClick, asChild }) => {
  return (
    <div onClick={onClick}>
      {children}
    </div>
  )
}

const PopoverContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute right-0 z-50 mt-2 w-80 rounded-md border bg-white p-4 text-slate-800 shadow-md outline-none",
      className
    )}
    {...props}
  >
    {children}
  </div>
))
PopoverContent.displayName = "PopoverContent"

export { Popover, PopoverTrigger, PopoverContent }
