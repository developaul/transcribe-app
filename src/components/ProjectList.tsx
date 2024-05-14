'use client'
import { Plus } from 'lucide-react'
import ProjectItem from '@/components/ProjectItem'
import { TypographyH1 } from '@/components/ui/Typography'
import SubmitButton from '@/components/ui/SubmitButton'
import { createProject } from '@/lib/actions'

const projects = [
  {
    _id: '1',
    name: 'Title example 1',
    createdAt: new Date(),
  },
  {
    _id: '2',
    name: 'Title example 2',
    createdAt: new Date(),
  }
]


const ProjectList = () => {

  return (
    <main className="flex flex-col">
      <div className='flex items-center justify-between mb-6'>
        <TypographyH1>Projects</TypographyH1>

        <form action={createProject}>
          <SubmitButton>
            <Plus className="mr-2 h-4 w-4" />
            New
          </SubmitButton>
        </form>
      </div>

      <ul className='w-full flex flex-col'>
        {projects.map((project) => <ProjectItem key={project._id} project={project} />)}
      </ul>
    </main>
  )
}

export default ProjectList