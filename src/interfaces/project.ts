export interface IProject {
  _id: string
  name: string
  createdAt: Date
  createdById?: string
  file?: ProjectFile
  transcription?: Transcription
}

export interface ProjectFile {
  url: string
  extension: string
}

interface Transcription {
  text: string,
  words: TranscriptionWord[]
}

interface TranscriptionWord {
  text: string,
  start: number,
  end: number,
  confidence: number,
  speaker: any
}