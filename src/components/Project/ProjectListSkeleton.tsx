
import ItemSkeleton from '@/components/Project/ItemSkeleton'

const defaultProjects = [1, 2, 3, 4, 5]

const ProjectListSkeleton = () => {
  return (
    <ul className='w-full flex flex-col'>
      {defaultProjects.map(value => (
        <ItemSkeleton key={value} />
      ))}
    </ul>
  )
}

export default ProjectListSkeleton