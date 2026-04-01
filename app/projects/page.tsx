import { Navigation } from "../components/nav";
import { Projects } from "./projects";
import { Metadata } from "next";

export const revalidate = 60;

export type Props = {};

export const metadata: Metadata = {
  title: "Projects | Octavio Gzain",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen">
      <Navigation currentPage="projects" />
      <main className="container px-6 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
        <Projects />
      </main>
    </div>
  );
}
