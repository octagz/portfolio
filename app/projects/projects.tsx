import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";

import { Card } from "../components/card";
import { Article } from "./article";
import { Props } from "./page";

export const Projects: React.FC<Props> = () => {
  const featured = allProjects.find((project) => project.slug === "ogz-compass-data-platform")!;
  const top2 = allProjects.find((project) => project.slug === "ogz-dajent")!;
  const top3 = allProjects.find((project) => project.slug === "ogz-product-matcher")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter((project) => project.slug !== featured.slug && project.slug !== top2.slug && project.slug !== top3.slug)
    .sort(
      (a, b) => new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() - new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground">Selected work</p>
        <h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">Projects</h1>
        <p className="max-w-3xl text-base text-muted-foreground">Some projects are part of my day job, others were born from curiosity and late-night experiments.</p>
      </div>
      <div className="h-px w-full bg-border/70" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Card>
          <Link href={`/projects/${featured.slug}`}>
            <article className="relative flex h-full flex-col gap-4 p-4 md:p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {featured.date ? (
                  <time dateTime={new Date(featured.date).toISOString()}>
                    {Intl.DateTimeFormat(undefined, {
                      dateStyle: "medium",
                    }).format(new Date(featured.date))}
                  </time>
                ) : (
                  <span>SOON</span>
                )}
              </div>
              <h2 id="featured-post" className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                {featured.title}
              </h2>
              <p className="text-base text-muted-foreground">{featured.description}</p>
              <div className="mt-auto text-sm font-semibold text-primary">
                Read more <span aria-hidden="true">&rarr;</span>
              </div>
            </article>
          </Link>
        </Card>

        <div className="flex w-full flex-col gap-8">
          {[top2, top3].map((project) => (
            <Card key={project.slug}>
              <Article project={project} technologies={project.technologies ?? ""} />
            </Card>
          ))}
        </div>
      </div>

      <div className="hidden h-px w-full bg-border/70 md:block" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {sorted.slice(0, 9).map((project) => (
          <Card key={project.slug}>
            <Article project={project} technologies={project.technologies ?? ""} />
          </Card>
        ))}
      </div>
    </div>
  );
};
