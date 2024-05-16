'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FC, Key } from 'react'
import { Mic } from 'lucide-react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {
  TypographyP,
  TypographySmall
} from '@/components/ui/Typography'
import MenuOptions from '@/components/Project/MenuOptions'

import { IProject } from '@/interfaces/project'

dayjs.extend(relativeTime)

interface Props {
  project: IProject
}

const ProjectItem: FC<Props> = ({ project }) => {
  const { _id, name, createdAt } = project

  const pathname = usePathname()

  return (
    <Link className='p-4 ease-in-out duration-300 hover:bg-gray-50 dark:hover:bg-zinc-800' href={`${pathname}/${_id}`}>
      <li className='flex items-center justify-between cursor-pointer' key={_id as Key} >
        <div className='flex items-center gap-4'>
          <Mic className='w-8 h-8' />
          <div>
            <TypographyP>{name}</TypographyP>
            <TypographySmall>{dayjs(createdAt).fromNow()}</TypographySmall>
          </div>
        </div>
        <MenuOptions project={project} />
      </li>
    </Link >
  )
}

export default ProjectItem