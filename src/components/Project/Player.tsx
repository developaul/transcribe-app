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
    <footer className='flex flex-col justify-center items-center w-full fixed bottom-0 left-0 border-t-2 py-8 gap-6'>
      <div className='flex gap-2'>
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
      <div className='w-96'>
        <AudioControl audio={audioRef} />
        <audio src={'/audio.mp3'} ref={audioRef} />
      </div>
    </footer>
  )
}

export default Footer