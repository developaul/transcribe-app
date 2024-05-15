'use client'

import { FC, PropsWithChildren, useState } from 'react'

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

  const [state, setState] = useState<State>(initialState)

  const setIsPlaying = (isPlaying: boolean) => setState(prev => ({ ...prev, isPlaying }))

  return (
    <PlayerContext.Provider
      value={{
        ...state,
        setIsPlaying
      }}>
      {children}
    </PlayerContext.Provider>
  )
}

export default Provider