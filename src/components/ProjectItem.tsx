import { FC } from 'react'
import { EllipsisVertical, Mic } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { TypographyP, TypographySmall } from './ui/Typography'

dayjs.extend(relativeTime)

interface Props {
  project: any
}

const ProjectItem: FC<Props> = ({ project }) => {
  const { _id, name, createdAt } = project

  return (
    <li className='flex items-center justify-between' key={_id} >
      <div className='flex items-center gap-2'>
        <Mic />
        <div>
          <TypographyP>{name}</TypographyP>
          <TypographySmall>{dayjs(createdAt).fromNow()}</TypographySmall>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Rename project</DropdownMenuItem>
          <DropdownMenuItem>Delete Project</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  )
}

export default ProjectItem