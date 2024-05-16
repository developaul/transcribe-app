'use client'

import { FC, useContext, useEffect, useRef } from 'react'
import { SkipBack, SkipForward, Play, Pause } from 'lucide-react'

import { Button } from '@/components/ui/button'
import PlayerContext from '@/context/Player/context'
import AudioControl from '@/components/Project/AudioControl'

import { ProjectFile } from '@/interfaces/project'

interface Props {
  file?: ProjectFile
}

const Footer: FC<Props> = ({ file }) => {
  const { setIsPlaying, isPlaying } = useContext(PlayerContext)

  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    isPlaying
      ? audioRef.current?.play()
      : audioRef.current?.pause()
  }, [isPlaying])

  const handleClick = () => {
    if (!file || !audioRef.current) return
    if (audioRef.current.currentTime >= audioRef.current.duration) return
    setIsPlaying(!isPlaying)
  }

  const handleSkipBack = () => {
    if (!file || !audioRef.current) return
    audioRef.current.currentTime = 0
  }

  const handleSkipForward = () => {
    if (!file || !audioRef.current) return
    audioRef.current.currentTime = audioRef.current.duration ?? 0
    setIsPlaying(false)
  }

  return (
    <footer className='flex flex-col justify-center items-center w-full fixed bottom-0 left-0 border-t border-t-black dark:border-t-white py-2 gap-1'>
      <div className='container'>
        <div className='flex items-center justify-center gap-2'>
          <Button disabled={!file} variant='ghost' onClick={handleSkipBack}>
            <SkipBack />
          </Button>
          <Button disabled={!file} variant='ghost' onClick={handleClick}>
            {isPlaying ? <Pause /> : <Play />}
          </Button>
          <Button disabled={!file} variant='ghost' onClick={handleSkipForward} >
            <SkipForward />
          </Button>
        </div>
        <div className='flex items-center justify-center w-full'>
          <AudioControl audio={audioRef} file={file} />
          <audio className='hidden' src={file?.url ?? ''} ref={audioRef} />
        </div>
      </div>
    </footer>
  )
}

export default Footer