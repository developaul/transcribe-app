import { Schema } from "mongoose";

import { IFile } from "@/interfaces/file";

export const FileSchema = new Schema<IFile>({
  url: { type: String },
  extension: { type: String }
}, { timestamps: true, _id: false })
