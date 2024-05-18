import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const fakeTranscription = [0, 1, 2]

const TranscriptionWrapperSkeleton = () => {
  return (
    <main className="flex flex-col flex-1 container gap-8">
      {/* Name input skeleton */}
      <div className='flex flex-col gap-2'>
        <Skeleton className='w-[90px] h-4 rounded-full' />
        <Skeleton className='w-full h-8 rounded-full' />
      </div>

      {/* Transcription skeleton */}
      <section className='flex flex-col gap-4 mb-8'>
        {fakeTranscription.map((_, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <Skeleton className='w-[80px] h-4 rounded-full' />
            <Skeleton className='w-full h-4 rounded-full mb-1' />
            <Skeleton className='w-full h-4 rounded-full mb-1' />
            <Skeleton className='w-full h-4 rounded-full mb-1' />
            <Skeleton className='w-full h-4 rounded-full mb-1' />
          </div>
        ))}
      </section>
    </main>
  )
}

export default TranscriptionWrapperSkeleton