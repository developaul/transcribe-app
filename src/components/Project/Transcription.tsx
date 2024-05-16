'use client'

import { FC, Fragment, useContext } from 'react'

import PlayerContext from '@/context/Player/context'

interface Props {
  transcription: {
    text: string,
    words: {
      text: string,
      start: number,
      end: number,
      confidence: number,
      speaker: any
    }[]
  }
}

const Transcription: FC<Props> = ({ transcription }) => {
  const { wordsRefs } = useContext(PlayerContext)

  return (
    <div className='flex flex-wrap'>
      {
        transcription.words.map(({ text, start, end }, index) => {
          return (
            <Fragment key={`${index}-${text}`}>
              <span
                data-start={start}
                data-end={end}
                ref={newRef => { wordsRefs.current[index] = newRef as HTMLSpanElement }}
                className='hover:bg-gray-200 px-0.5 py-1 rounded-md transition-all duration-300 ease-in-out'
              >
                {text}
              </span>
              &nbsp;
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default Transcription