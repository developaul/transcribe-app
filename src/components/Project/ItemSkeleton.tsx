import React from 'react'

import { Skeleton } from "@/components/ui/skeleton"

const ItemSkeleton = () => {
  return (
    <li className='flex items-center justify-between p-4'>
      <div className='flex items-center gap-4'>
        <Skeleton className='w-10 h-10 rounded-full' />
        <div className='flex flex-col gap-2 md:gap-4'>
          <Skeleton className='w-[150px] md:w-[350px] h-7' />
          <Skeleton className='w-[50px] md:w-[200px] h-4' />
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <Skeleton className='w-2 h-2' />
        <Skeleton className='w-2 h-2' />
        <Skeleton className='w-2 h-2' />
      </div>
    </li>
  )
}

export default ItemSkeleton