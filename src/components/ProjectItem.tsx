'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FC, useState } from 'react'
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
  DialogTrigger
} from '@/components/ui/dialog'
import {
  TypographyP,
  TypographySmall
} from '@/components/ui/Typography'
import { PropagationStopper } from '@/components/ui/PropagationStopper'
import DeleteProject from '@/components/DeleteProject'
import RenameProject from '@/components/RenameProject'
import { ProjectActions } from '@/lib/project'

dayjs.extend(relativeTime)

interface Props {
  project: any
}

const ProjectItem: FC<Props> = ({ project }) => {
  const { _id, name, createdAt } = project

  const pathname = usePathname()

  const [projectAction, setProjectAction] = useState<ProjectActions | null>(null)

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
                <DialogTrigger
                  onClick={() => setProjectAction(ProjectActions.update)}
                  asChild>
                  <DropdownMenuItem>
                    <span>Rename</span>
                  </DropdownMenuItem>
                </DialogTrigger>

                <DialogTrigger
                  onClick={() => setProjectAction(ProjectActions.delete)}
                  asChild>
                  <DropdownMenuItem>
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent>
              {projectAction === ProjectActions.delete && <DeleteProject />}
              {projectAction === ProjectActions.update && <RenameProject project={project} />}
            </DialogContent>
          </Dialog>
        </PropagationStopper>
      </li>
    </Link >
  )
}

export default ProjectItem