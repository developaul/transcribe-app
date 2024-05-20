import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";

const s3ClientConfig: S3ClientConfig = {
  region: process.env.STORAGE_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.STORAGE_ACCESS_KEY!,
    secretAccessKey: process.env.STORAGE_SECRET_KEY!,
  },
};

const s3Client = new S3Client(s3ClientConfig);

export {
  s3Client
}