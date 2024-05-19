import { auth } from "@clerk/nextjs/server"
import { HydratedDocument } from "mongoose"
import { Transcript } from "assemblyai"

import connectMongo from "@/server/connections/mongo"
import ProjectModel from "@/server/models/Project"

import { IProject } from '@/interfaces/project'
import { IFile } from "@/interfaces/file"

export interface UpdateNameArgs {
  projectId: string
  name: string
}

export interface UpdateFileArgs {
  projectId: string
  file: IFile
}

export interface UpdateTranscript {
  projectId: string
  transcript: Transcript
}

class ProjectController {
  async create(): Promise<IProject> {
    await connectMongo()

    const { userId } = auth()

    const project: HydratedDocument<IProject> = new ProjectModel({ createdById: userId })
    await project.save()

    return project
  }

  async updateName({ projectId, name }: UpdateNameArgs): Promise<void> {
    await connectMongo()

    const { userId } = auth()

    await ProjectModel.findOneAndUpdate({ _id: projectId, createdById: userId }, { name })
  }

  async updateFile({ projectId, file }: UpdateFileArgs): Promise<void> {
    await connectMongo()

    const { userId } = auth()

    const { url, extension } = file

    await ProjectModel.findOneAndUpdate({ _id: projectId, createdById: userId }, {
      'file.url': url,
      'file.extension': extension
    })
  }

  async updateTranscript({ projectId, transcript }: UpdateTranscript) {
    await connectMongo()

    const { userId } = auth()

    const { utterances } = transcript

    await ProjectModel.findOneAndUpdate({ _id: projectId, createdById: userId }, {
      'transcription.utterances': utterances
    })
  }

  async delete(projectId: string): Promise<void> {
    await connectMongo()

    const { userId } = auth()

    await ProjectModel.findOneAndDelete({ _id: projectId, createdById: userId })
  }

  async getProjects(): Promise<IProject[]> {
    await connectMongo()

    const { userId } = auth()

    const projects: HydratedDocument<IProject[]> = await ProjectModel
      .find({ createdById: userId })
      .sort({ createdAt: -1 })
      .lean()

    return projects
  }

  async getProjectById(projectId: string): Promise<IProject> {
    await connectMongo()

    const { userId } = auth();

    const project: HydratedDocument<IProject> | null = await ProjectModel.findOne({ _id: projectId, createdById: userId }).lean()

    if (!project) throw new Error('Project not found')

    return project
  }
}

const projectController = new ProjectController()

export default projectController