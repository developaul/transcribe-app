'use client'

import { FC, PropsWithChildren } from 'react'
import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const SubmitButton: FC<PropsWithChildren> = ({ children }) => {
  const { pending } = useFormStatus()

  return (
    <Button type='submit' disabled={pending} >
      {
        pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </>
        ) : children
      }
    </Button>
  )
}