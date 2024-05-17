import { Transcript } from 'assemblyai'

import Assemblyai from '@/server/services/Assemblyai'

class AssemblyaiController {
  async transcribe(audioUrl: string): Promise<Transcript> {
    const assemblyai = new Assemblyai()
    const transcript = await assemblyai.transcribe(audioUrl)

    return transcript
  }
}

const assemblyaiController = new AssemblyaiController()

export default assemblyaiController