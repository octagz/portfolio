import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Projects } from "./projects";
import { Metadata } from "next";

export const revalidate = 60;

export type Props = {};

export default async function ProjectsPage() {

  return (
     <div className="relative pb-16">
       <Navigation currentPage="projects"/>
       <Projects/>
    </div>
  );

}
