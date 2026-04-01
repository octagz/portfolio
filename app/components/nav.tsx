"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const navItems = [
	{ id: "projects", name: "Projects", href: "/projects" },
	{ id: "about", name: "About", href: "/about" },
	{ id: "contact", name: "Contact", href: "/contact" },
];

export const Navigation: React.FC<{ currentPage: string }> = ({ currentPage }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref} className="relative z-50">
			<div
				className={`fixed inset-x-0 top-0 border-b backdrop-blur-md transition-colors duration-200 ease-out ${
					isIntersecting ? "bg-background/60 border-transparent" : "bg-background/90 border-border/60"
				}`}
			>
				<div className="container mx-auto flex items-center justify-between px-6 py-5 lg:px-8">
					<Link href="/" className="font-display text-lg tracking-tight text-foreground transition-colors hover:text-primary">
						Octavio Gzain
					</Link>

					<nav className="hidden gap-8 text-sm sm:flex">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`transition-colors ${
									currentPage === item.id
										? "text-foreground"
										: "text-muted-foreground hover:text-foreground"
								}`}
							>
								{item.name}
							</Link>
						))}
					</nav>

					{currentPage !== "home" && (
						<Link
							href="/"
							className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground sm:hidden"
							aria-label="Back to home"
						>
							<ArrowLeft className="h-4 w-4" />
						</Link>
					)}
					{currentPage === "home" && <div className="sm:hidden" />}
				</div>
			</div>
		</header>
	);
};
