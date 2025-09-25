import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { View } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Props = {
	project: Project;
	technologies: string
};

export const Article: React.FC<Props> = ({ project, technologies }) => {
	const techs = technologies?.split(",").map((tech: string) => { return tech.trim() }) || [];
	return (
		<Link href={`/projects/${project.slug}`}>
			<article className="flex flex-col p-4 md:p-6 gap-2">
                <div className="flex justify-between gap-2">
					<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						{project.date ? (
							<time dateTime={new Date(project.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
                    
				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{project.title}
				</h2>
				<div className="items-center">
					{ techs && techs.length > 0 && (
						techs.map((tech: string) => (
							<Badge key={tech} className="mx-2 my-1 bg-gray-900 hover:bg-gray-100/50 text-gray-200 dark:hover:bg-gray-800/50" variant="secondary">
							{tech}
							</Badge>
						))
					)}
				</div>
				<p className="mb-8 z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200 mx-auto max-w-prose">
					{project.description}
				</p>

                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>

			</article>
		</Link>
	);
};

