import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { s3Client } from "../connections/aws";

class SignController {
  generateKey(fileName: string) {
    const timestamp = new Date().getTime();

    const key = `files/${timestamp}_${fileName}`

    return key
  }

  async getSignedURL(fileName: string) {
    const key = this.generateKey(fileName)

    const putObjectCommand = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: key,
    });

    const signedUrl = await getSignedUrl(s3Client, putObjectCommand, {
      expiresIn: 60,
    });

    return { signedUrl, key }
  }
}

const signController = new SignController()

export default signController