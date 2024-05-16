import { NextPage } from "next";

import { Input } from "@/components/ui/input"
import { TypographyP } from "@/components/ui/Typography";

import UploadFile from "@/components/UploadFile";
import Player from "@/components/Project/Player";
import Transcription from "@/components/Project/Transcription";
import PlayerProvider from "@/context/Player/Provider";

import { getProjectById } from "@/lib/actions";

interface Props {
  params: {
    projectId: string
  }
}

const ProjectPage: NextPage<Props> = async ({ params }) => {
  const project = await getProjectById(params.projectId)

  return (
    <PlayerProvider>
      <div className="flex flex-col">
        <Input placeholder="Untitled" defaultValue={project.name} />

        <TypographyP className="mb-8">Easily transcribe your audio files with our intuitive interface</TypographyP>

        {project.fileUrl ? <Transcription transcription={project.transcription} /> : <UploadFile />}

        <Player />
      </div>
    </PlayerProvider>
  );
}
export default ProjectPage