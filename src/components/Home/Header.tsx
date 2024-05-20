'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import Logo from '@/components/Logo'

import { Theme } from '@/lib/theme'


const Header = () => {
  const { setTheme } = useTheme()

  return (
    <header className="sticky top-0 py-4 bg-white dark:bg-dark">
      <div className='container flex items-center justify-between '>
        <Logo />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme(Theme.Light)}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme(Theme.Dark)}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme(Theme.System)}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>

  )
}

export default Header