import { Metadata } from "next";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-background">
			{children}
		</div>
	);
}

export const metadata: Metadata = {
	title: 'Projects',
};
