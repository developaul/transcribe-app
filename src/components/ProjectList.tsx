import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ProjectItem from './ProjectItem'
import { TypographyH1 } from './ui/Typography'


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
      <div className='flex items-center justify-between my-6'>
        <TypographyH1>Projects</TypographyH1>

        <Button>
          <Plus className="mr-2 h-4 w-4" />

          New
        </Button>
      </div>

      <ul className='w-full flex flex-col gap-4'>
        {projects.map((project) => <ProjectItem key={project._id} project={project} />)}
      </ul>
    </main>
  )
}

export default ProjectList