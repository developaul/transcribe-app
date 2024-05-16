'use client'

import { useContext, useEffect, useRef } from 'react'
import { SkipBack, SkipForward, Play, Pause } from 'lucide-react'

import { Button } from '@/components/ui/button'
import PlayerContext from '@/context/Player/context'
import AudioControl from '@/components/Project/AudioControl'

const Footer = () => {
  const { setIsPlaying, isPlaying } = useContext(PlayerContext)

  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    isPlaying
      ? audioRef.current?.play()
      : audioRef.current?.pause()
  }, [isPlaying])

  const handleClick = () => {
    if (!audioRef.current) return
    if (audioRef.current.currentTime >= audioRef.current.duration) return
    setIsPlaying(!isPlaying)
  }

  const handleSkipBack = () => {
    if (!audioRef.current) return
    audioRef.current.currentTime = 0
  }

  const handleSkipForward = () => {
    if (!audioRef.current) return
    audioRef.current.currentTime = audioRef.current.duration ?? 0
    setIsPlaying(false)
  }

  return (
    <footer className='flex flex-col justify-center items-center w-full fixed bottom-0 left-0 border-t border-t-black dark:border-t-white py-2 gap-1'>
      <div className='container'>
        <div className='flex items-center justify-center gap-2'>
          <Button variant='ghost' onClick={handleSkipBack}>
            <SkipBack />
          </Button>
          <Button variant='ghost' onClick={handleClick}>
            {isPlaying ? <Pause /> : <Play />}
          </Button>
          <Button variant='ghost' onClick={handleSkipForward} >
            <SkipForward />
          </Button>
        </div>
        <div className='flex items-center justify-center w-full'>
          <AudioControl audio={audioRef} />
          <audio className='hidden' src={'/audio.mp3'} ref={audioRef} />
        </div>
      </div>
    </footer>
  )
}

export default Footer