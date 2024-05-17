'use server'

import signController from "@/server/controllers/sign"

export const getSignedURL = async (fileName: string) => {
  try {
    const { signedUrl, key } = await signController.getSignedURL(fileName)
    return { success: true, signedUrl, key }

  } catch (error: any) {
    return { success: false, message: error?.message ?? 'unknown error' }
  }
}