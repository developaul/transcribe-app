import { NextPage } from "next";

import UploadFile from "@/components/UploadFile";
import { Input } from "@/components/ui/input"
import { TypographyP } from "@/components/ui/Typography";

interface Props {
  params: {
    projectId: string
  }
}

const ProjectPage: NextPage<Props> = ({ params }) => {
  console.log("🚀 ~ params:", params)

  return (
    <div className="flex flex-col">
      <Input placeholder="Untitled" />

      <TypographyP className="mb-8">Easily transcribe your audio files with our intuitive interface</TypographyP>

      <UploadFile />
    </div >
  );
}
export default ProjectPage