import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Navigation } from "../components/nav";

const contactMethods = [
  {
    label: "Email",
    handle: "ogzain@ucsb.edu",
    href: "mailto:ogzain@ucsb.edu",
    icon: Mail,
    description: "Best for collaborations, opportunities, and mentoring.",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/octavio-gzain",
    href: "https://linkedin.com/in/octavio-gzain",
    icon: Linkedin,
    description: "Connect for career stories, team growth, or speaking invites.",
  },
  {
    label: "GitHub",
    handle: "github.com/octagz",
    href: "https://github.com/octagz",
    icon: Github,
    description: "Open-source experiments and starter kits.",
  },
  {
    label: "X (Twitter)",
    handle: "@ottogzain",
    href: "https://x.com/ottogzain",
    icon: Twitter,
    description: "Notes on AI, data, and engineering leadership.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="contact" />

      <main>
        <section className="container px-6 lg:px-8 pb-16 pt-36 lg:pt-44">
          <div className="max-w-2xl space-y-6">
            <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground">Connect</p>
            <h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
              Let&apos;s build something useful together
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              Whether you need help shaping an AI roadmap, stabilizing a data platform, or are
              looking for a driven engineer to join your team — I respond fastest via email.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="mailto:ogzain@ucsb.edu">Send an email</Link>
            </Button>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="container px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid gap-8 sm:grid-cols-2">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <Link
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex gap-4 rounded-xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/40 hover:bg-card/70"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-foreground">{method.label}</p>
                      <p className="text-xs text-muted-foreground">{method.handle}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
