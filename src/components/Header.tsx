"use client"

import { useTheme } from 'next-themes'
import { Moon, Sun, Undo2 } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'

import { Theme } from '@/lib/theme'

const Header = () => {
  const { setTheme } = useTheme()

  const { projectId } = useParams<{ projectId: string }>()

  return (
    <header className={clsx('container flex items-center justify-end pt-8 pb-6 bg:white dark:bg-dark', { 'justify-between': Boolean(projectId) })}>
      {Boolean(projectId) && (
        <Link href={'/workspace'}>
          <Undo2 />
        </Link>
      )}

      <div className="flex items-center gap-4">
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

        <UserButton afterSignOutUrl='/' />
      </div>
    </header>
  )
}

export default Header