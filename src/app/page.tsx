import Header from "@/components/Header";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <div className="container flex flex-col">
      <Header />
      <ProjectList />
    </div>
  );
}
