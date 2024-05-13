'use server'

export const createProject = async () => {
  console.log('CREANDO PROJECT')

  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log('Creacion terminada')
}

export const deleteProject = async (projectId: string) => {
  console.log('ELIMINANDO PROJECT', projectId)
}