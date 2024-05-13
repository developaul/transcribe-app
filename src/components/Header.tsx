"use client"

import { useTheme } from 'next-themes'
import { Check, LogOut, Settings, SunMoon, Undo2 } from 'lucide-react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

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
import { TypographyLarge, TypographySmall } from '@/components/ui/Typography'

import { getAvatarFallbackName } from '@/lib/user'
import { Theme } from '@/lib/theme'

const user = {
  fullName: "Paul Chavez",
  email: "paulchavezromero20@gmail.com",
  photo: "https://github.com/developaul.png"
}

const Header = () => {
  const { setTheme, theme } = useTheme()

  const { projectId } = useParams<{ projectId: string }>()

  const avatarFallbackName = getAvatarFallbackName(user.fullName)

  return (
    <header className={clsx('flex items-center justify-end sticky top-0 pt-8 pb-6', { 'justify-between': Boolean(projectId) })}>
      {Boolean(projectId) && (
        <Link href={'/workspace'}>
          <Undo2 />
        </Link>
      )}

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