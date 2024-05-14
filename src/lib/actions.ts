'use server'

export const createProject = async () => {
  console.log('Creando project')

  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log('Creacion terminada')
}

export const deleteProject = async (projectId: string) => {
  console.log('Eliminando project', projectId)

  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log('Eliminacion terminada')
}

export const renameProject = async (name: string) => {
  console.log('Actualizando project', name)

  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log('Actualizacion terminada')
}