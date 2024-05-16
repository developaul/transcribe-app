'use client'

import { FC, PropsWithChildren, useRef, useState } from 'react'

import PlayerContext from './context'

export interface State {
  isPlaying: boolean,
  currentAudio: string,
  volume: number,
}

const initialState = {
  isPlaying: false,
  currentAudio: '',
  volume: 1,
}

const Provider: FC<PropsWithChildren> = ({ children }) => {
  const wordsRefs = useRef<HTMLSpanElement[]>([])

  const [state, setState] = useState<State>(initialState)

  const setIsPlaying = (isPlaying: boolean) => setState(prev => ({ ...prev, isPlaying }))

  return (
    <PlayerContext.Provider
      value={{
        ...state,
        setIsPlaying,
        wordsRefs
      }}>
      {children}
    </PlayerContext.Provider>
  )
}

export default Provider