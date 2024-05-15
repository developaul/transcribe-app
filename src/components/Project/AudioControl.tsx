import { RefObject, useEffect, useState } from 'react'
import { Slider } from "@/components/ui/slider"

interface Props {
  audio: RefObject<HTMLAudioElement>
}

const AudioControl = ({ audio }: Props) => {
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    audio.current?.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      audio.current?.removeEventListener('timeupdate', handleTimeUpdate)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleTimeUpdate = () => {
    // TODO: Update global state
    setCurrentTime(audio.current?.currentTime ?? 0)
  }

  const formatTime = (time: number) => {
    if (time == null) return `0:00`

    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60)

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const duration = audio?.current?.duration ?? 0

  return (
    <div className="flex gap-x-3 text-xs pt-2">
      <span className="opacity-50 w-12 text-right">{formatTime(currentTime)}</span>

      <Slider
        value={[currentTime]}
        max={audio?.current?.duration ?? 0}
        min={0}
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