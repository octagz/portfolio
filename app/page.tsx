import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Navigation } from "./components/nav";

export const metadata: Metadata = {
  title: "Octavio Gzain — Engineer, Fulbright Scholar, Entrepreneur",
};

const experience = [
  {
    period: "2025 – Present",
    role: "MTM Student & Founder",
    org: "UC Santa Barbara",
    note: "Fulbright Scholar · Founded DaJent (AI for DJs)",
  },
  {
    period: "2024 – 2025",
    role: "Senior Software Engineer",
    org: "Compass",
    note: "Data platforms · 1M+ users · Kafka · Python/Java",
  },
  {
    period: "2021 – 2023",
    role: "Technical Leader",
    org: "Nuqlea",
    note: "6+ engineers · E-commerce · AI/ML · $1M+ transactions",
  },
  {
    period: "2018 – 2021",
    role: "Software Engineer",
    org: "digitalstrom AG",
    note: "IoT · C++ firmware · 10K+ deployed units",
  },
];

const focusAreas = [
  {
    title: "Intelligent platforms",
    items: [
      "LLM-powered product matching and automation",
      "Human-in-the-loop guardrails & evaluation",
      "Observability-first AI services",
    ],
  },
  {
    title: "Data foundations",
    items: [
      "Streaming + batch ingestion at terabyte scale",
      "Data contracts, cataloging, and lineage",
      "Automated quality gates for downstream teams",
    ],
  },
  {
    title: "Product leadership",
    items: [
      "Roadmaps balancing quick wins with platform bets",
      "Aligning engineers, PMs, and operators",
      "Mentoring through career inflection points",
    ],
  },
  {
    title: "Entrepreneurship",
    items: [
      "Founded DaJent — AI-powered DJ workflow platform — at UCSB's NVC",
      "Market validation and technology strategy",
      "Bridging technical skills with business impact",
    ],
  },
];

const toolStack = [
  "Python", "Java", "Node.js", "React", "Next.js", "C++",
  "PHP Laravel", "Apache Kafka", "AWS", "GCP", "Elasticsearch",
  "BigQuery", "Airflow", "GPT-4 & LLMs", "Docker",
];

const honors = [
  "Fulbright Scholar (2025)",
  "Smart Port Lab Innovation Challenge Winner (2024)",
  "NAVES National Entrepreneurship Finalist (2021)",
  "2nd Place, Patagonia Innova (2020)",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="home" />

      <main>
        {/* ── Hero ── */}
        <section className="container px-6 lg:px-8 pb-20 pt-36 lg:pt-44">
          <div className="max-w-4xl space-y-8">
            <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground">
              Engineer · Fulbright Scholar · Entrepreneur
            </p>
            <h1 className="font-display text-6xl leading-[1.05] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              Octavio<br />Gzain
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Argentine engineer building at the intersection of AI, engineering, and business.
              8+ years shipping data platforms, AI products, and leading teams across
              Argentina, Switzerland, and the United States.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/projects" className="inline-flex items-center gap-2">
                  Explore projects <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/contact">Start a conversation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section className="border-y border-border bg-card/50">
          <div className="container px-6 lg:px-8">
            <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
              {[
                { value: "8+", label: "Years of experience" },
                { value: "3", label: "Countries" },
                { value: "1M+", label: "Users served" },
                { value: "6+", label: "Engineers led" },
              ].map((stat) => (
                <div key={stat.label} className="px-6 py-8 text-center">
                  <p className="font-display text-3xl text-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs tracking-wider uppercase text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bio + Now ── */}
        <section className="container px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <Avatar className="h-16 w-16 border border-border shadow-sm">
                  <AvatarImage src="/profile_outside.jpg" alt="Octavio Gzain" className="object-cover" />
                  <AvatarFallback>OG</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">About</p>
                  <h2 className="font-display text-3xl tracking-tight text-foreground">The short version</h2>
                </div>
              </div>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  I&apos;m a Fulbright Scholar pursuing the Master of Technology Management at UC Santa Barbara.
                  My career spans three countries and bridges deep technical execution with business strategy.
                </p>
                <p>
                  I&apos;ve led engineering teams at startups, built large-scale data systems at Compass
                  ingesting terabytes of real estate data daily, and shipped AI-powered products in
                  production — from GPT-4 product matching to DocumentAI invoice recognition.
                </p>
                <p>
                  At UCSB, I founded DaJent — an AI-powered platform that automates music organization
                  for DJs — through the New Venture Competition, while developing the leadership
                  and business skills to complement my engineering background.
                </p>
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4">
                Read the full story <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="space-y-6 lg:pt-8">
              <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Now — 2026</h3>
              <div className="rounded-xl border border-border bg-card/60 p-6 space-y-5">
                <dl className="space-y-4">
                  {[
                    { dt: "Current", dd: "MTM Student & Founder · UC Santa Barbara" },
                    { dt: "Building", dd: "DaJent — AI-powered DJ workflow platform" },
                    { dt: "Previously", dd: "Senior Software Engineer · Compass" },
                    { dt: "Location", dd: "Santa Barbara, California" },
                  ].map((item) => (
                    <div key={item.dt}>
                      <dt className="text-xs tracking-wider uppercase text-muted-foreground">{item.dt}</dt>
                      <dd className="mt-0.5 text-sm font-medium text-foreground">{item.dd}</dd>
                    </div>
                  ))}
                </dl>
                <div className="border-t border-border pt-4 text-sm text-muted-foreground">
                  Seeking post-graduation opportunities in Engineering Management, Senior Engineering, Solutions Architecture, or Technical PM.{" "}
                  <Link href="/contact" className="font-medium text-foreground underline-offset-4 hover:underline">
                    Let&apos;s talk.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="border-y border-border bg-card/30">
          <div className="container px-6 lg:px-8 py-20 lg:py-28 space-y-10">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Experience</p>
              <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground sm:text-4xl">Where I&apos;ve been</h2>
            </div>
            <div className="divide-y divide-border">
              {experience.map((item) => (
                <div key={item.org} className="grid gap-2 py-6 sm:grid-cols-[180px_1fr] sm:gap-8">
                  <p className="text-sm text-muted-foreground tabular-nums">{item.period}</p>
                  <div>
                    <p className="font-medium text-foreground">{item.role} <span className="text-muted-foreground">· {item.org}</span></p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Focus areas ── */}
        <section className="container px-6 lg:px-8 py-20 lg:py-28 space-y-10">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">How I help</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground sm:text-4xl">Focus areas</h2>
          </div>
          <div className="grid gap-12 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area.title} className="space-y-4">
                <h3 className="font-display text-xl text-foreground">{area.title}</h3>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {area.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Honors ── */}
        <section className="border-y border-border bg-card/30">
          <div className="container px-6 lg:px-8 py-14">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-12">
              <p className="shrink-0 text-sm tracking-[0.2em] uppercase text-muted-foreground sm:w-[180px]">Honors & awards</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {honors.map((h, i) => (
                  <span key={h}>
                    {i === 0 ? <span className="font-medium text-foreground">{h}</span> : h}
                    {i < honors.length - 1 && <span className="ml-6 text-border">|</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Toolbox ── */}
        <section className="container px-6 lg:px-8 py-20 lg:py-28 space-y-8">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Toolbox</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground">Technologies I reach for</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {toolStack.map((tool) => (
              <Badge
                key={tool}
                variant="outline"
                className="border-border bg-card/60 px-3 py-1 text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </section>

        {/* ── CTA footer ── */}
        <section className="border-t border-border">
          <div className="container px-6 lg:px-8 py-20 lg:py-28 text-center space-y-6">
            <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
              Let&apos;s build something together
            </h2>
            <p className="mx-auto max-w-lg text-base text-muted-foreground">
              Whether you need help shaping an AI strategy, stabilizing a data platform, or are looking for a driven engineer joining your team.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact" className="inline-flex items-center gap-2">
                Start a conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
