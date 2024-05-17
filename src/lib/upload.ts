'use client'
import axios from 'axios'
import { getSignedURL } from "@/server/routes/sign"

interface UploadFileArgs {
  file: File
}

export const uploadFile = async ({ file }: UploadFileArgs) => {
  const { success, message, signedUrl, key } = await getSignedURL(file.name)

  if (!success) throw new Error(message)

  await axios({
    url: signedUrl,
    method: 'PUT',
    data: file,
    headers: {
      "Content-Type": file?.type ?? "",
    }
  })

  return `${process.env.NEXT_PUBLIC_AWS_CLOUTFRONT_URL}/${key}`
}