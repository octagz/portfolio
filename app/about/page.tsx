import Link from "next/link";
import { Metadata } from "next";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Navigation } from "../components/nav";

export const metadata: Metadata = {
  title: "About Octavio Gzain",
};

const credentialBadges = [
  "Fulbright Scholar",
  "Software Engineering (BS)",
  "Data Science (MS)",
  "Technology Management (MTM, UCSB)",
];

const journey = [
  {
    period: "2025 – Present",
    title: "UC Santa Barbara · MTM Student & Founder",
    description:
      "Pursuing Master of Technology Management as a Fulbright Scholar. Founded DaJent, an AI-powered platform that automates music organization for DJs, through the New Venture Competition.",
    tags: ["Entrepreneurship", "AI/ML", "SaaS"],
  },
  {
    period: "2024 – 2025",
    title: "Compass · Senior Software Engineer",
    description:
      "Architected Python/Java microservices ingesting terabytes of real estate data daily for 1M+ users. Optimized pipelines for low-latency ingestion, cut incident response time by 40%, and improved system availability by 30%.",
    tags: ["Data pipelines", "Kafka", "Distributed systems"],
  },
  {
    period: "2021 – 2023",
    title: "Nuqlea · Technical Leader",
    description:
      "Led a team of 6+ engineers building Argentina's first construction e-commerce platform ($1M+ transactions in year one). Shipped AI-powered product matching (GPT-4, NLP), a GCP data lake, and DocumentAI invoice recognition.",
    tags: ["Team leadership", "AI/ML", "E-commerce"],
  },
  {
    period: "2018 – 2021",
    title: "digitalstrom AG · Software Engineer",
    description:
      "Built IoT firmware in C++ for smart home devices deployed in 10K+ units. Led test automation with Python, Jenkins, and GitlabCI, boosting reliability and deployment speed by 50%.",
    tags: ["IoT", "C++", "Test automation"],
  },
];

const principles = [
  {
    title: "Human-centered AI",
    description: "I build systems that keep people in control, pairing LLMs with safeguards, evaluation loops, and thoughtful UX.",
  },
  {
    title: "Operational calm",
    description: "Reliable software is boring software. I obsess over observability, documentation, and rituals that help teams sleep at night.",
  },
  {
    title: "Lead by example",
    description: "No micromanagement. Radical honesty, constant feedback loops, and always being available to unblock the team.",
  },
];

const education = [
  { label: "Fulbright Scholar", detail: "Fulbright Foreign Scholarship Board · 2025 · UC Santa Barbara" },
  { label: "Master of Technology Management", detail: "University of California, Santa Barbara · 2025 – 2026" },
  { label: "Master's in Data Science", detail: "Universidad Nacional del Sur · Argentina · 2022 – 2023" },
  { label: "BS in Information Systems Engineering", detail: "Universidad Nacional del Sur · Argentina · 2013 – 2019" },
];

const hobbies = [
  "Techno music production on Ableton",
  "Guitarist with a passion for technical and shred styles",
  "Football fanatic and occasional Sunday-league midfielder",
  "DJing and curating playlists for friends and team events",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="about" />

      <main>
        {/* ── Hero ── */}
        <section className="container px-6 lg:px-8 pb-16 pt-36 lg:pt-44">
          <div className="flex flex-col items-center text-center space-y-6">
            <Avatar className="h-24 w-24 border border-border shadow-sm">
              <AvatarImage src="/profile_outside.jpg" alt="Octavio Gzain" className="object-cover" />
              <AvatarFallback>OG</AvatarFallback>
            </Avatar>
            <div className="space-y-4">
              <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground">About</p>
              <h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Building at the intersection of<br className="hidden sm:block" /> AI, engineering, and business
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
                Argentine engineer and Fulbright Scholar living in Santa Barbara, California.
                I translate ambitious visions into actionable roadmaps, robust platforms,
                and inclusive teams — while keeping curiosity at the center.
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {credentialBadges.map((badge, i) => (
                  <Badge
                    key={badge}
                    variant={i === 0 ? "default" : "outline"}
                    className={i === 0 ? "" : "border-border text-muted-foreground"}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/projects">See selected work</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/contact">Start a conversation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Journey ── */}
        <section className="border-y border-border bg-card/30">
          <div className="container px-6 lg:px-8 py-20 lg:py-28 space-y-10">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Journey</p>
              <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground">Highlights</h2>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                Each chapter has sharpened how I balance data rigor, human experience, and the business realities of shipping software.
              </p>
            </div>

            {/* Vertical timeline */}
            <div className="relative ml-3 border-l border-border pl-8 space-y-12 md:ml-6">
              {journey.map((item, i) => (
                <div key={item.title} className="relative">
                  <span
                    className={`absolute -left-[calc(2rem+4.5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 ${
                      i === 0
                        ? "border-primary bg-primary"
                        : "border-border bg-background"
                    }`}
                  />
                  <p className="text-xs tracking-wider uppercase text-muted-foreground">{item.period}</p>
                  <h3 className="mt-1 font-display text-xl text-foreground">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Principles ── */}
        <section className="container px-6 lg:px-8 py-20 lg:py-28 space-y-10">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Principles</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground">What guides my teams</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="space-y-3">
                <h3 className="font-display text-xl text-foreground">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education + Hobbies ── */}
        <section className="border-y border-border bg-card/30">
          <div className="container px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
              <div className="space-y-6">
                <div>
                  <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Education</p>
                  <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground">Learning & recognition</h2>
                </div>
                <div className="divide-y divide-border">
                  {education.map((item) => (
                    <div key={item.label} className="py-4 first:pt-0 last:pb-0">
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Personal</p>
                  <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground">Outside of work</h2>
                </div>
                <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {hobbies.map((hobby) => (
                    <p key={hobby} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {hobby}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
