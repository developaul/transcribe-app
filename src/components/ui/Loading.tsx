import React from 'react'
import { Loader2 } from 'lucide-react'

const Loading = () => {
  return (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </>
  )
}

export default Loading