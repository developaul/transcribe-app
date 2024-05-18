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
    <main className="flex-1 overflow-y-scroll">
      <section className="container">
        <NameInput projectId={_id} name={name} />
        {transcription ? <Transcription transcription={transcription} /> : <UploadFile projectId={_id} />}
      </section>
    </main>
  )
}

export default TranscriptionWrapper