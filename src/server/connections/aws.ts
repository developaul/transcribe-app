import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";

const s3ClientConfig: S3ClientConfig = {
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_PRIVATE_KEY!,
  },
};

const s3Client = new S3Client(s3ClientConfig);

export {
  s3Client
}