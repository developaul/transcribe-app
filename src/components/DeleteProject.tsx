import React from 'react'

import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const DeleteProject = () => {
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
        <Button variant='destructive' type="submit">Confirm</Button>
      </DialogFooter>
    </>
  )
}

export default DeleteProject