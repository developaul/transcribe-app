'use client'
import React, { FC } from 'react'

import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { deleteProject } from '@/lib/actions'

interface Props {
  projectId: string
}

const DeleteProject: FC<Props> = ({ projectId }) => {
  const deleteProjectWithId = deleteProject.bind(null, projectId)

  return (
    <>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. Are you sure you want to permanently
          delete this project from our servers?
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <form action={deleteProjectWithId}>
          <Button variant='destructive' type="submit">Confirm</Button>
        </form>
      </DialogFooter>
    </>
  )
}

export default DeleteProject