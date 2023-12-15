import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Redis } from "@upstash/redis";
import { Projects } from "./projects";

const redis = Redis.fromEnv();

export const revalidate = 60;

export type Props = {
	views: any
};

export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  return (
     <div className="relative pb-16">
       <Navigation currentPage="projects"/>
       <Projects views={views}/>
    </div>
  );

}
