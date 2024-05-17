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

    const project: HydratedDocument<IProject> = new ProjectModel()
    await project.save()

    return project
  }

  async updateName({ projectId, name }: UpdateNameArgs): Promise<void> {
    await connectMongo()

    await ProjectModel.findByIdAndUpdate(projectId, { name })
  }

  async updateFile({ projectId, file }: UpdateFileArgs): Promise<void> {
    await connectMongo()

    const { url, extension } = file

    await ProjectModel.findByIdAndUpdate(projectId, {
      'file.url': url,
      'file.extension': extension
    })
  }

  async updateTranscript({ projectId, transcript }: UpdateTranscript) {
    await connectMongo()

    const { utterances } = transcript

    await ProjectModel.findByIdAndUpdate(projectId, {
      'transcription.utterances': utterances
    })
  }

  async delete(projectId: string): Promise<void> {
    await connectMongo()

    await ProjectModel.findByIdAndDelete(projectId)
  }

  async getProjects(): Promise<IProject[]> {
    await connectMongo()

    const projects: HydratedDocument<IProject[]> = await ProjectModel.find().sort({ createdAt: -1 }).lean()

    return projects
  }

  async getProjectById(projectId: string): Promise<IProject> {
    await connectMongo()

    const project: HydratedDocument<IProject> | null = await ProjectModel.findById(projectId).lean()

    if (!project) throw new Error('Project not found')

    return project
  }
}

const projectController = new ProjectController()

export default projectController