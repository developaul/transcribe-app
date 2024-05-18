import { Skeleton } from '@/components/ui/skeleton'

const FooterSkeleton = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full border-t bg-white dark:bg-dark border-t-black dark:border-t-white py-2 gap-1">
      {/* Player skeleton */}
      <div className='container flex flex-col gap-2'>
        <div className='flex items-center justify-center gap-2'>
          <Skeleton className='w-10 h-10 rounded-full' />
          <Skeleton className='w-10 h-10 rounded-full' />
          <Skeleton className='w-10 h-10 rounded-full' />
        </div>
        <div className='flex items-center justify-center w-full'>
          <Skeleton className='w-[400px] h-3 rounded-full' />
        </div>
      </div>
    </footer>
  )
}

export default FooterSkeleton