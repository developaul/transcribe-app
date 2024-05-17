import { IFile } from "./file"

export interface IProject {
  _id: string
  name: string
  createdAt: Date
  createdById?: string
  file?: IFile
  transcription?: ITranscription
}

export interface ITranscription {
  utterances: IUtterance[];
}

export interface IUtterance {
  confidence: number;
  end: number;
  speaker: string;
  start: number;
  text: string;
  words?: IUtterance[];
}
