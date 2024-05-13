'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FC } from 'react'
import { EllipsisVertical, Mic } from 'lucide-react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  TypographyP,
  TypographySmall
} from '@/components/ui/Typography'
import { Button } from '@/components/ui/button'
import { PropagationStopper } from '@/components/ui/PropagationStopper'

dayjs.extend(relativeTime)

interface Props {
  project: any
}

const ProjectItem: FC<Props> = ({ project }) => {
  const { _id, name, createdAt } = project

  const pathname = usePathname()

  return (
    <Link className='p-4 ease-in-out duration-300 hover:bg-gray-50 dark:hover:bg-zinc-800' href={`${pathname}/${_id}`}>
      <li className='flex items-center justify-between cursor-pointer' key={_id} >
        <div className='flex items-center gap-4'>
          <Mic className='w-8 h-8' />
          <div>
            <TypographyP>{name}</TypographyP>
            <TypographySmall>{dayjs(createdAt).fromNow()}</TypographySmall>
          </div>
        </div>
        <PropagationStopper>
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Rename</DropdownMenuItem>

                <DialogTrigger asChild>
                  <DropdownMenuItem>
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Delete Dialog */}
            <DialogContent  >
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. Are you sure you want to permanently
                  delete this project from our servers?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant='destructive' type="submit">Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </PropagationStopper>
      </li>
    </Link >
  )
}

export default ProjectItem