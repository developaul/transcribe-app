'use server'

import { revalidatePath } from "next/cache"

import projectController, { UpdateFileArgs, UpdateNameArgs } from "@/server/controllers/project"
import assemblyaiController from "@/server/controllers/assemblyai"

import { IProject } from "@/interfaces/project"
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"

export const createProject = async () => {
  auth().protect();
  const project = await projectController.create()
  revalidatePath('/workspace')
  redirect(`/workspace/${project._id}`)
}

export const getProjects = async (): Promise<IProject[]> => {
  auth().protect();
  const projects = await projectController.getProjects()
  return JSON.parse(JSON.stringify(projects))
}

export const getProjectById = async (projectId: string): Promise<IProject> => {
  try {
    auth().protect();
    const project = await projectController.getProjectById(projectId)
    return JSON.parse(JSON.stringify(project))
  } catch (error) {
    redirect(`/workspace`)
  }
}

export const deleteProject = async (projectId: string) => {
  auth().protect();
  await projectController.delete(projectId)
  revalidatePath('/workspace')
}

export const renameProject = async ({ projectId, name }: UpdateNameArgs) => {
  auth().protect();
  await projectController.updateName({ projectId, name })
  revalidatePath('/workspace')
}

export const transcribeFile = async ({ projectId, file }: UpdateFileArgs) => {
  auth().protect();
  await projectController.updateFile({ projectId, file })

  const transcript = await assemblyaiController.transcribe(file.url)

  await projectController.updateTranscript({ projectId, transcript })

  revalidatePath(`/workspace/${projectId}`)
}