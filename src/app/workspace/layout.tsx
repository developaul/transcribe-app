import { FC, PropsWithChildren } from "react";
import PlayerProvider from "@/context/Player/Provider";

const WorkSpaceLayout: FC<PropsWithChildren> = ({ children }) => {

  return (
    <PlayerProvider>
      <div className="flex flex-col h-screen overflow-hidden">
        {children}
      </div>
    </PlayerProvider>
  );
}
export default WorkSpaceLayout