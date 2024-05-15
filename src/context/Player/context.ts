import { createContext } from "react";

import { State } from "./Provider";

interface PlayerContextArgs extends State {
  setIsPlaying: (isPlaying: boolean) => void
}

const PlayerContext = createContext<PlayerContextArgs>({} as PlayerContextArgs)

export default PlayerContext