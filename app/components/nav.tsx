"use client";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const navItems = [
	{ id: "projects", name: "Projects", href: "/projects" },
	{ id: "about", name: "About", href: "/about" },
	{ id: "contact", name: "Contact", href: "/contact" },
];

function useTheme() {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		setDark(document.documentElement.classList.contains("dark"));
	}, []);

	const toggle = () => {
		const next = !dark;
		setDark(next);
		document.documentElement.classList.toggle("dark", next);
	};

	return { dark, toggle };
}

export const Navigation: React.FC<{ currentPage: string }> = ({ currentPage }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const { dark, toggle } = useTheme();

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

					<nav className="hidden gap-8 text-sm sm:flex items-center">
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
						<button
							onClick={toggle}
							aria-label="Toggle dark mode"
							className="ml-2 rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
						>
							{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
						</button>
					</nav>

					<div className="flex items-center gap-3 sm:hidden">
						<button
							onClick={toggle}
							aria-label="Toggle dark mode"
							className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
						>
							{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
						</button>
						{currentPage !== "home" && (
							<Link
								href="/"
								className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
								aria-label="Back to home"
							>
								<ArrowLeft className="h-4 w-4" />
							</Link>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};
