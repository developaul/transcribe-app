import { FC, PropsWithChildren } from "react";

import Header from "@/components/Header";

const WorkSpaceLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container flex flex-col">
      <Header />
      {children}
    </div>
  );
}
export default WorkSpaceLayout