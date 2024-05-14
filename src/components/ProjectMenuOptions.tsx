'use client'

import { FC, useState } from 'react'
import { EllipsisVertical } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
} from '@/components/ui/dialog'
import {
  AlertDialog,
} from "@/components/ui/alert-dialog"
import PropagationStopper from '@/components/ui/PropagationStopper'
import RenameAction from '@/components/RenameAction'
import DeleteAction from '@/components/DeleteAction'

import { ProjectActions } from '@/lib/project'

interface Props {
  project: any
}

const ProjectMenuOptions: FC<Props> = ({ project }) => {
  const [actionState, setActionState] = useState<ProjectActions | null>(null)

  const handleOpen = (projectAction: ProjectActions) => () =>
    setActionState(projectAction)

  const handleClose = () =>
    setActionState(null)

  const handleOpenChange = (open: boolean) => {
    if (open) return
    handleClose()
  }

  return (
    <PropagationStopper>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleOpen(ProjectActions.Rename)}>
            Rename
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleOpen(ProjectActions.Delete)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={actionState === ProjectActions.Rename} onOpenChange={handleOpenChange}>
        <RenameAction onClose={handleClose} project={project} />
      </Dialog>

      <AlertDialog open={actionState === ProjectActions.Delete} onOpenChange={handleOpenChange}>
        <DeleteAction onClose={handleClose} projectId={project._id} />
      </AlertDialog>
    </PropagationStopper>
  )
}

export default ProjectMenuOptions