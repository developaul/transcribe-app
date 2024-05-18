import { getProjectById } from '@/server/routes/project'

import Player from './Player'
import { FC } from 'react'

interface Props {
  projectId: string
}

const Footer: FC<Props> = async ({ projectId }) => {
  const { file } = await getProjectById(projectId)

  return (
    <footer className='flex flex-col justify-center items-center w-full border-t bg-white dark:bg-dark border-t-black dark:border-t-white py-2 gap-1'>
      <Player file={file} />
      {/* TODO: Add volume control */}
    </footer>
  )
}

export default Footer