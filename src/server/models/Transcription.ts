import { Schema } from "mongoose";

import { ITranscription, IUtterance } from "@/interfaces/project";

const UtterancesSchema = new Schema<IUtterance>({
  confidence: { type: Number },
  end: { type: Number },
  speaker: { type: String },
  start: { type: Number },
  text: { type: String },
}, { timestamps: true, _id: false })

UtterancesSchema.add({ words: [UtterancesSchema] })

export const TranscriptionSchema = new Schema<ITranscription>({
  utterances: {
    type: [UtterancesSchema]
  }
}, { timestamps: true, _id: false })
