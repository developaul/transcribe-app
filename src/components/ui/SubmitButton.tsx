'use client'

import { FC, PropsWithChildren } from 'react'
import { useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'
import Loading from '@/components/ui/Loading'

const SubmitButton: FC<PropsWithChildren> = ({ children }) => {
  const { pending } = useFormStatus()

  return (
    <Button type='submit' disabled={pending} >
      {pending ? <Loading /> : children}
    </Button>
  )
}

export default SubmitButton