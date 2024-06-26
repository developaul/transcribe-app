'use client'

import { MutableRefObject, createContext } from "react";

import { State } from "./Provider";

interface PlayerContextArgs extends State {
  setIsPlaying: (isPlaying: boolean) => void
  wordsRefs: MutableRefObject<Record<string, HTMLSpanElement>>
}

const PlayerContext = createContext<PlayerContextArgs>({} as PlayerContextArgs)

export default PlayerContext