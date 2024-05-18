'use server'

import { revalidatePath } from "next/cache"

import projectController, { UpdateFileArgs, UpdateNameArgs } from "@/server/controllers/project"
import assemblyaiController from "@/server/controllers/assemblyai"

import { IProject } from "@/interfaces/project"
import { redirect } from "next/navigation"

export const createProject = async () => {
  const project = await projectController.create()

  revalidatePath('/workspace')
  redirect(`/workspace/${project._id}`)
}

export const getProjects = async (): Promise<IProject[]> => {
  const projects = await projectController.getProjects()
  return JSON.parse(JSON.stringify(projects))
}

export const getProjectById = async (projectId: string): Promise<IProject> => {
  const project = await projectController.getProjectById(projectId)
  return JSON.parse(JSON.stringify(project))
}

export const deleteProject = async (projectId: string) => {
  await projectController.delete(projectId)

  revalidatePath('/workspace')
}

export const renameProject = async ({ projectId, name }: UpdateNameArgs) => {
  await projectController.updateName({ projectId, name })

  revalidatePath('/workspace')
}

export const transcribeFile = async ({ projectId, file }: UpdateFileArgs) => {
  await projectController.updateFile({ projectId, file })

  const transcript = await assemblyaiController.transcribe(file.url)

  await projectController.updateTranscript({ projectId, transcript })

  revalidatePath(`/workspace/${projectId}`)
}