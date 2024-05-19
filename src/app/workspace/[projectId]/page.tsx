import { Suspense } from "react";
import { NextPage } from "next";

import Header from "@/components/Project/Header";
import Footer from "@/components/Project/Footer";
import FooterSkeleton from "@/components/Project/Skeleton/FooterSkeleton";
import TranscriptionWrapper from "@/components/Project/TranscriptionWrapper";
import TranscriptionWrapperSkeleton from "@/components/Project/Skeleton/TranscriptionWrapperSkeleton";

interface Props {
  params: { projectId: string }
}

const ProjectPage: NextPage<Props> = ({ params }) => {
  const { projectId } = params

  return (
    <>
      <Header />

      <Suspense fallback={<TranscriptionWrapperSkeleton />}>
        <TranscriptionWrapper projectId={projectId} />
      </Suspense>

      <Suspense fallback={<FooterSkeleton />}>
        <Footer projectId={projectId} />
      </Suspense >
    </>
  );
}
export default ProjectPage