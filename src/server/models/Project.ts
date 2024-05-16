import { models, model, Schema, Model } from "mongoose";

import { IProject } from "@/interfaces/project";

type IProjectModel = Model<IProject>

const Project = new Schema<IProject, IProjectModel>(
  {
    name: {
      type: String,
      default: 'Untitled'
    },
    createdById: {
      type: Schema.ObjectId
    }
  },
  { timestamps: true }
);

const ProjectModel: IProjectModel = models.Project || model("Project", Project);

export default ProjectModel