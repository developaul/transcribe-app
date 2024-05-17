import { AssemblyAI } from 'assemblyai'

class Assemblyai {
  private client: AssemblyAI

  constructor() {
    this.client = new AssemblyAI({
      apiKey: process.env.ASSEMBLYAI_API_KEY ?? ''
    })
  }

  async transcribe(audioUrl: string) {
    const params = {
      audio: audioUrl,
      speaker_labels: true
    }

    const transcript = await this.client.transcripts.transcribe(params)

    return transcript
  }

}

export default Assemblyai