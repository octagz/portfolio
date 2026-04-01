import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};


export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header project={project} />
        <div className="flex w-full justify-center px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <article className="prose prose-slate prose-quoteless w-full max-w-3xl">
            <Mdx code={project.body.code} />
          </article>
        </div>
      </div>
    );
}
