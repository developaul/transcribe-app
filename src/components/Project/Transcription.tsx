'use client'

import { FC, Fragment, useContext } from 'react'

import PlayerContext from '@/context/Player/context'
import { ITranscription } from '@/interfaces/project'

interface Props {
  transcription: ITranscription
}

const Transcription: FC<Props> = ({ transcription }) => {
  const { wordsRefs } = useContext(PlayerContext)

  return (
    <div className='flex flex-col gap-4 mb-8'>
      {transcription.utterances.map(({ speaker, start, end, words, }) => {
        const key = `${speaker}:${start}-${end}`

        return (
          <div className='flex flex-col' key={key}>
            <span className='inline-block mb-1'>Speaker {speaker}:</span>
            <div className='flex items-center flex-wrap'>
              {
                (words ?? []).map(({ text, start, end }) => {
                  const key = `${start}-${end}-${text}`

                  return (
                    <Fragment key={key}>
                      <span
                        data-start={start}
                        data-end={end}
                        ref={newRef => { wordsRefs.current[key] = newRef as HTMLSpanElement }}
                        className='hover:bg-gray-200 dark:hover:bg-gray-700 px-0.5 py-1 rounded-md transition-all duration-300 ease-in-out'
                      >
                        {text}
                      </span>
                      &nbsp;
                    </Fragment>
                  )
                })
              }
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Transcription