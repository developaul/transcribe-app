import { Suspense } from "react";
import { Plus } from "lucide-react";

import { createProject } from "@/server/routes/project";

import ProjectList from "@/components/ProjectList";
import SubmitButton from "@/components/ui/SubmitButton";
import { TypographyH1 } from "@/components/ui/Typography";
import ProjectListSkeleton from "@/components/Project/ProjectListSkeleton";

export default function WorkSpace() {
  return (
    <main className="flex flex-col">
      <div className='flex items-center justify-between mb-6'>
        <TypographyH1>Projects</TypographyH1>

        <form action={createProject}>
          <SubmitButton>
            <Plus className="mr-2 h-4 w-4" />
            New
          </SubmitButton>
        </form>
      </div>

      <Suspense fallback={<ProjectListSkeleton />}>
        <ProjectList />
      </Suspense>
    </main>
  );
}
