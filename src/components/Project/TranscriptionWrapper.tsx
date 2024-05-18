import { FC } from 'react'

import { getProjectById } from '@/server/routes/project'

import UploadFile from '@/components/UploadFile'
import NameInput from '@/components/Project/NameInput'
import Transcription from '@/components/Project/Transcription'

interface Props {
  projectId: string
}

const TranscriptionWrapper: FC<Props> = async ({ projectId }) => {
  const { _id, name, transcription } = await getProjectById(projectId)

  return (
    <main className="flex flex-col flex-1 min-h-0">
      <NameInput projectId={_id} name={name} />
      <section className='flex-1 min-h-0 overflow-y-scroll mt-8'>
        <div className='container'>
          {transcription ? <Transcription transcription={transcription} /> : <UploadFile projectId={_id} />}
        </div>
      </section>
    </main>
  )
}

export default TranscriptionWrapper