import { NextPage } from "next";
import { Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

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

      <div>
        <Button className="flex">
          <Upload className="mr-2 w-4 h-4" />
          Add File
        </Button>

        <Input className="hidden" id="picture" type="file" />
      </div>
    </div>
  );
}
export default ProjectPage