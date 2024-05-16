'use client'

import { RefObject, useContext, useEffect, useState, } from 'react'

import PlayerContext from '@/context/Player/context'
import { Slider } from "@/components/ui/slider"
import { useForceUpdate } from '@/lib/hooks'

import { ProjectFile } from '@/interfaces/project'

interface Props {
  audio: RefObject<HTMLAudioElement>
  file?: ProjectFile
}

const AudioControl = ({ audio, file }: Props) => {
  const { wordsRefs } = useContext(PlayerContext)

  const [currentTime, setCurrentTime] = useState(0)

  const forceUpdate = useForceUpdate()

  useEffect(() => {
    audio.current?.addEventListener('timeupdate', handleTimeUpdate)

    forceUpdate()

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      audio.current?.removeEventListener('timeupdate', handleTimeUpdate)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleTimeUpdate = (event: any) => {
    const newCurrentTime = event.target.currentTime ?? 0
    const newCurrentTimeInMilisecons = Number((newCurrentTime * 1000).toFixed(0))

    wordsRefs.current.forEach((wordRef) => {
      const startTime = Number(wordRef.dataset.start)
      const endTime = Number(wordRef.dataset.end)

      if (newCurrentTimeInMilisecons >= startTime && newCurrentTimeInMilisecons <= endTime) {
        wordRef.classList.add('bg-blue-200', 'dark:bg-blue-500')
        return
      }

      wordRef.classList.remove('bg-blue-200', 'dark:bg-blue-500')
    })

    setCurrentTime(newCurrentTime)
  }

  const formatTime = (time: number) => {
    if (time == null) return `0:00`

    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60)

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const duration = audio?.current?.duration ?? 0

  return (
    <div className="w-full flex items-center justify-center gap-x-3 text-xs pt-2">
      <span className="opacity-50 w-12 text-right">{formatTime(currentTime)}</span>

      <Slider
        value={[currentTime]}
        max={audio?.current?.duration ?? 0}
        min={0}
        disabled={!file}
        className="w-[400px]"
        onValueChange={(value) => {
          const [newCurrentTime] = value
          if (!audio.current) return
          audio.current.currentTime = newCurrentTime
        }}
      />

      <span className="opacity-50 w-12">
        {duration ? formatTime(duration) : '0:00'}
      </span>
    </div>
  )
}


export default AudioControl