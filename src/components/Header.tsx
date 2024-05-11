"use client"

import React from 'react'
import { useTheme } from 'next-themes'
import { Check, LogOut, Menu, Settings, SunMoon, UserPlus } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getAvatarFallbackName } from '@/lib/user'
import { TypographyLarge, TypographySmall } from './ui/Typography'
import { Theme } from '@/lib/theme'

const user = {
  fullName: "Paul Chavez",
  email: "paulchavezromero20@gmail.com",
  photo: "https://github.com/developaul.png"
}

const Header = () => {
  const { setTheme, theme } = useTheme()

  const avatarFallbackName = getAvatarFallbackName(user.fullName)

  return (
    <header className='flex items-center justify-between sticky top-0 pt-8'>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>

        </SheetContent>
      </Sheet>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={user.photo} />
            <AvatarFallback>{avatarFallbackName}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className='flex items-center gap-2'>
            <Avatar>
              <AvatarImage src={user.photo} />
              <AvatarFallback>{avatarFallbackName}</AvatarFallback>
            </Avatar>
            <div>
              <TypographyLarge>{user.fullName}</TypographyLarge>
              <TypographySmall>{user.email}</TypographySmall>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <SunMoon className="mr-2 h-4 w-4" />
              <span>Theme</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setTheme(Theme.Light)}>
                  {theme == Theme.Light && (<Check className='mr-2 w-4 h-4' />)}
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  {theme == Theme.Dark && (<Check className='mr-2 w-4 h-4' />)}
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  {theme == Theme.System && (<Check className='mr-2 w-4 h-4' />)}
                  System
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

export default Header