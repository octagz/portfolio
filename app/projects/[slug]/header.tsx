"use client";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
	project: {
		url?: string;
		title: string;
		description: string;
		repository?: string;
		technologies?: string;
	};
};
export const Header: React.FC<Props> = ({ project }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	const links: { label: string; href: string }[] = [];
	if (project.repository) {
		links.push({
			label: "GitHub",
			href: `https://github.com/${project.repository}`,
		});
	}
	if (project.url) {
		links.push({
			label: "Website",
			href: project.url,
		});
	}
	const techs = project.technologies?.split(",").map((tech: string) => tech.trim()) || [];

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref} className="relative isolate overflow-hidden bg-background">
			<div>
				<div
					className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur transition-colors duration-200 ${
						isIntersecting ? "bg-background/10 border-transparent" : "bg-background/80 border-border/60 shadow-sm"
					}`}
				>
					<div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
						<div className="flex items-center gap-4 text-muted-foreground">
							<Link target="_blank" href="https://twitter.com/ottogzain" className="transition hover:text-foreground">
								<Twitter className="h-5 w-5" />
							</Link>
							<Link target="_blank" href="https://github.com/octagz" className="transition hover:text-foreground">
								<Github className="h-5 w-5" />
							</Link>
						</div>

						<Link href="/projects" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground">
							<ArrowLeft className="h-5 w-5" />
							Back to projects
						</Link>
					</div>
				</div>
			</div>
			<div className="container relative mx-auto flex flex-col items-center px-6 py-24 text-center sm:py-32 lg:px-8">
				<div className="mx-auto max-w-3xl space-y-6">
					<p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Case study</p>
					<h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">{project.title}</h1>
					<p className="text-lg text-muted-foreground">{project.description}</p>
					<div className="flex flex-wrap justify-center gap-2">
						{techs.map((tech) => (
							<Badge key={tech} variant="secondary" className="bg-secondary/80 text-secondary-foreground">
								{tech}
							</Badge>
						))}
					</div>
				</div>

				{links.length > 0 && (
					<div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-6 text-base font-semibold text-primary">
						{links.map((link) => (
							<Link key={link.label} target="_blank" href={link.href} className="inline-flex items-center gap-2 underline-offset-4 hover:underline">
								{link.label} <span aria-hidden="true">&rarr;</span>
							</Link>
						))}
					</div>
				)}
			</div>
		</header>
	);
};
