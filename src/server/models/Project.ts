import { models, model, Schema, Model } from "mongoose";

import { FileSchema } from "./File";
import { TranscriptionSchema } from "./Transcription";

import { IProject } from "@/interfaces/project";

type IProjectModel = Model<IProject>

const Project = new Schema<IProject, IProjectModel>(
  {
    name: {
      type: String,
      default: 'Untitled'
    },
    createdById: {
      type: String
    },
    file: {
      type: FileSchema
    },
    transcription: {
      type: TranscriptionSchema
    }
  },
  { timestamps: true }
);


const ProjectModel: IProjectModel = models.Project || model("Project", Project);

export default ProjectModel