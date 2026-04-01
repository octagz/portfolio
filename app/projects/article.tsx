import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

type Props = {
	project: Project;
	technologies: string;
};

export const Article: React.FC<Props> = ({ project, technologies }) => {
	const techs = technologies?.split(",").map((tech: string) => tech.trim()) || [];
	return (
		<Link href={`/projects/${project.slug}`}>
			<article className="flex flex-col gap-3 p-4 md:p-6">
				<div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
					{project.date ? (
						<time dateTime={new Date(project.date).toISOString()}>
							{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(project.date))}
						</time>
					) : (
						<span>SOON</span>
					)}
				</div>
				<h2 className="font-semibold text-foreground lg:text-2xl">{project.title}</h2>
				{techs.length > 0 && (
					<div className="flex flex-wrap gap-2">
						{techs.map((tech: string) => (
							<Badge key={tech} variant="outline" className="border-border/70 px-3 py-1 text-xs text-muted-foreground">
								{tech}
							</Badge>
						))}
					</div>
				)}
				<p className="text-sm text-muted-foreground">{project.description}</p>
				<p className="text-sm font-semibold text-primary">
					Read more <span aria-hidden="true">&rarr;</span>
				</p>
			</article>
		</Link>
	);
};