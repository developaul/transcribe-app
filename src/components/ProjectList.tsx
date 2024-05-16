import { Key } from 'react'

import { getProjects } from '@/server/routes/project'

import ProjectItem from '@/components/ProjectItem'

const ProjectList = async () => {
  const projects = await getProjects()

  return (
    <ul className='w-full flex flex-col'>
      {projects.map((project) => <ProjectItem key={project._id as Key} project={project} />)}
    </ul>
  )
}

export default ProjectList