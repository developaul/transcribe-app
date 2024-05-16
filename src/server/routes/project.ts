'use server'

import { revalidatePath } from "next/cache"

import projectController, { UpdateNameArgs } from "@/server/controllers/project"

import { IProject } from "@/interfaces/project"

export const createProject = async () => {
  await projectController.create()

  revalidatePath('/workspace')
}

export const getProjects = async (): Promise<IProject[]> => {
  const projects = await projectController.getProjects()
  return JSON.parse(JSON.stringify(projects))
}

export const deleteProject = async (projectId: string) => {
  await projectController.delete(projectId)

  revalidatePath('/workspace')
}

export const renameProject = async ({ projectId, name }: UpdateNameArgs) => {

  await projectController.updateName({ projectId, name })

  revalidatePath('/workspace')
}