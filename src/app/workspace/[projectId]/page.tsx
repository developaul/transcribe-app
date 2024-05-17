
import { NextPage } from "next";

import { getProjectById } from "@/server/routes/project";

import UploadFile from "@/components/UploadFile";
import Player from "@/components/Project/Player";
import Transcription from "@/components/Project/Transcription";
import PlayerProvider from "@/context/Player/Provider";
import NameInput from "@/components/Project/NameInput";


interface Props {
  params: { projectId: string }
}

const ProjectPage: NextPage<Props> = async ({ params }) => {
  const project = await getProjectById(params.projectId)

  return (
    <PlayerProvider>
      <div className="flex flex-col">
        <NameInput projectId={project._id} name={project.name} />

        {project.transcription ? <Transcription transcription={project.transcription} /> : <UploadFile />}

        <Player file={project.file} />
      </div>
    </PlayerProvider>
  );
}
export default ProjectPage