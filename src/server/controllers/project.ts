import { HydratedDocument } from "mongoose"

import connectMongo from "@/server/connections/mongo"
import ProjectModel from "@/server/models/Project"
import { IProject } from '@/interfaces/project'

interface UpdateNameArgs {
  projectId: string
  name: string
}

class ProjectController {
  async create(): Promise<IProject> {
    await connectMongo()

    const project: HydratedDocument<IProject> = new ProjectModel()
    console.log("🚀 ~ ProjectController ~ create ~ project:", project)
    await project.save()

    return project
  }

  async updateName({ projectId, name }: UpdateNameArgs): Promise<void> {
    await connectMongo()

    await ProjectModel.findByIdAndUpdate(projectId, { $set: { name } })
  }

  async delete(projectId: string): Promise<void> {
    await connectMongo()

    await ProjectModel.findByIdAndDelete(projectId)
  }

  async getProjects(): Promise<IProject[]> {
    await connectMongo()

    const projects: HydratedDocument<IProject[]> = await ProjectModel.find().lean()

    return projects
  }
}

const projectController = new ProjectController()

export default projectController