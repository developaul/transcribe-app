'use client'
import React, { FC, useState } from 'react'

import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'
import { preventDefault } from '@/lib/prevent'

import { deleteProject } from '@/server/routes/project'

interface Props {
  projectId: string
  onClose: () => void
}

const DeleteAction: FC<Props> = ({ projectId, onClose }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    setIsLoading(true)

    await deleteProject(projectId)
    onClose()
  }

  return (
    <AlertDialogContent
      onEscapeKeyDown={(event) => preventDefault({ event, isSubmitting: isLoading })}
    >
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your project from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <Button
          variant='outline'
          disabled={isLoading}
          onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant='destructive'
          disabled={isLoading}
          loading={isLoading}
          onClick={handleDelete}>
          Continue
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  )
}

export default DeleteAction